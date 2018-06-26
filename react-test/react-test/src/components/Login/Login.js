import React, { Component } from 'react';

class Login extends Component {

    state = {
        users: [
            {
                username: "pesho",
                password: "123"
            },
            {
                username: "gosho",
                password: "123"
            },
            {
                username: "koko",
                password: "123"
            }
        ],
        username:"",
        password:""
    }

    onInputChanged = (event, isUsername) => {
        let newValue = event.target.value;
        if (isUsername) {
            this.setState({ username: newValue })
        } else {
            this.setState({ password: newValue })
        }
    }

    onLoginClicked = () => {
        let username = this.state.username;
        let password = this.state.password;

        let user = this.state.users.find((u) => {
            return u.username === username;
        });
        if (user && user.password === password)
        {
            this.props.history.replace('/cinemas');
        } else {
            console.log("wrog username or password");
            // Wrong Username or password
        }   
    }

    render() {
        return (
            <div>
             <div> Username <input onChange={(event) => this.onInputChanged(event, true)} type="text" /> </div>
            <div> Password <input onChange={(event) => this.onInputChanged(event, false)} type="text" /> </div>

               <button onClick={() => this.onLoginClicked()}> Login </button>
            </div>
        );
    }
}

export default Login;