import React, { Component } from 'react';
import { List } from 'antd';
// import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';

class ListRoom extends Component {

    onCreateConversation = e => {
        var { currentUser } = this.props;
        if (currentUser) {
            this.props.onSentConversation(currentUser.user._id, e);
        }

        this.props.onGetId(e);
    }
    render() {
        var { data } = this.props;
        return (
            <div>
                <List
                    size="large"
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item onClick={() => this.onCreateConversation(item)}>{item}</List.Item>)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSentConversation: (sentUser, receiverUser) => {
            dispatch(Actions.actSendConversation(sentUser, receiverUser));
        },
        onGetId: (username) => {
            dispatch(Actions.actGetIdRequest(username));
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListRoom);

