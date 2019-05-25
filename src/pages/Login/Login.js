import React, { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';

import { connect } from 'react-redux';
import * as Actions from '../../actions/index';

import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
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
    componentWillReceiveProps(nextProps){
        var { currentUser } = nextProps;
        var { history } = this.props;
        if (currentUser.token){
            history.push('/home');
        }
    }
    onLogin = e => {
        var { username, password } = this.state;
        this.props.getCurrentUserLogin(username, password);
    }
    render() {
        var { username, password } = this.state;
        var token = localStorage.getItem('token');
        if (token){
            return <Redirect to="/home"/>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="margin-top-5px">
                            <Input placeholder="Username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="margin-top-5px">
                            <Input placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="margin-top-5px">
                            <Button type="primary" onClick={this.onLogin}>Login</Button>
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
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCurrentUserLogin: (username, password) => {
            dispatch(Actions.actGetCurrentUserLogInRequest(username, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
