import React, { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            name: ''
        }
    }

    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onLogin = e => {
        var { username, password, name } = this.state;
        this.props.getCurrentUserSignUp(username, password, name);
        
    }

    componentWillReceiveProps(nextProps){
        var { currentUser } = nextProps;
        var { history } = this.props;
        if (currentUser.token){
            history.push('/home');
        }
    } 
    render() {
        var { username, password, name } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="margin-top-5px">
                            <Input placeholder="Username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={ this.onChange }
                            />
                        </div>
                        <div className="margin-top-5px">
                            <Input placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={ this.onChange }
                            />
                        </div>
                        <div className="margin-top-5px">
                            <Input placeholder="Name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={ this.onChange }
                            />
                        </div>
                        <div className="margin-top-5px">
                            <Button type="primary" onClick={ this.onLogin }>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        isLoged: state.isLoged,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCurrentUserSignUp: (username, password, name) => {
            dispatch(Actions.actGetCurrentUserSignUpRequest(username, password, name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
