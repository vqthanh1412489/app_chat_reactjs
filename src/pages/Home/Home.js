import React, { Component } from 'react';
// import { Input, Button } from 'antd';
// import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';
import { Redirect } from 'react-router-dom';
import ListRoom from '../../components/ListRoom/index';
import FormChat from '../../components/FormChat/index';

class Home extends Component {

    componentDidMount() {
        this.props.onToggleStatus();
        this.props.getRooms('localhost:3000');
    }

    componentWillReceiveProps(nextProps) {

    }

    onGetTyping = e => {
        var { currentUser, receiver } = this.props;
        if (currentUser && receiver) {
            this.props.onGetTyping(e, currentUser.user._id, localStorage.getItem('receiver'));
        }
    }
    render() {
        var token = localStorage.getItem('token');
        if (!token) {
            return <Redirect to="/" />
        }

        var { rooms, messages } = this.props;
        console.log(messages);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ListRoom data={rooms} />
                    </div>
                    <div className="col-md-4">
                        <FormChat messages={messages}
                            onGetTyping={this.onGetTyping}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        currentUser: state.currentUser,
        messages: state.messages,
        receiver: state.receiver,

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        checkToken: () => {
            dispatch(Actions.actCheckTokenRequest());
        },
        getRooms: (endpoint) => {
            dispatch(Actions.openWebsocket(endpoint));
        },
        onToggleStatus: () => {
            dispatch(Actions.actToogleLoged(true));
        },
        onGetTyping: (content, sentUser, receiverUser) => {
            dispatch(Actions.actSetTyping(content, sentUser, receiverUser));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
