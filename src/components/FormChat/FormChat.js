import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Message from '../Message/index';
const Search = Input.Search;

class FormChat extends Component {
    onSearch = e => {
        this.props.onGetTyping(e);
    }

    render() {
        var { messages } = this.props;
 
        var ele = messages.map((message, index) => {
            return(
                <Message key={index} message={message}/>
            );
        });
        return (
            <div>
               <div className="form-chat">
                    { ele }
               </div>
               <Search
                    placeholder="Message"
                    onSearch={value => this.onSearch(value)}
                    style={{ width: 200 }}
                />
            </div>
        );
    }
}

export default FormChat;

