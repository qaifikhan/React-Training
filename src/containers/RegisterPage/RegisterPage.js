import React,  { Component} from 'react';
import axios from 'axios';

class RegisterPage extends Component {
    state = {
        usernameInputValue: '',
    }

    onSubmitClick = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        alert('Username => ' + username + ' Email => ' + email + ' Password => ' + password);

        const mObj = {
            username: username,
            email: email,
            password: password
        }

        axios.post("https://demoapi-43d03.firebaseio.com/qaifi/users.json", mObj, {headers: { Authorization : 'Token_hcbbvsdjgciybsd', 'KEY1': 'VALUE2'}})
        .then((response) => {
            alert('Account Created. Please verify your email')
            console.log(response);
        })
        .catch(() => {
            alert('Sorry!! Cant create account')
        })
    }

    onUsernameInputChanged = (event) => {
        this.setState({usernameInputValue: event.target.value.toUpperCase()});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitClick}>
                    <div>
                    <input type="text" value={this.state.usernameInputValue} name="username" onChange={this.onUsernameInputChanged} placeholder="Username" />
                    </div>
                    <div>
                    <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
                    <div>
                    <input type="submit" value="Register" />
                    <input type="reset" value="Reset" />
                    </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default RegisterPage;