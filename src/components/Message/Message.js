import React, { Component } from 'react';
import 'antd/dist/antd.css';

class Message extends Component {
    render() {
        var { message } = this.props;
        // console.log(message);
        return (
            <div>
                <h3>{message}</h3>
            </div>
        );
    }
}

export default Message;

