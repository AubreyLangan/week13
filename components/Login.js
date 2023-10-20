import React, { Component } from 'react';
import '../App.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };

    handleLogin = () => {
        const { username, password } = this.state;
        console.log('Username:', username);
        console.log('Password:', password);
    };

    render() {
        return (
            <div>
                <h3 className='h3'>Log in</h3>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;