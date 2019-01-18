import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleLoginSubmit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
    };

    render() {
        return (
            <div className='loginpage'>
                <div className='loginbox'>
                    <h1>login</h1>
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className='loginform'>
                            <label htmlFor="username">Username: </label>
                            <label htmlFor="password">Password:</label>
                        </div>
                        <div className='loginform'>
                            <input onChange={this.handleInputChange} id='username' type="text" /><br />
                            <input onChange={this.handleInputChange} id='password' type="password" />
                        </div>
                        <button onClick={this.handleLoginSubmit}></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;