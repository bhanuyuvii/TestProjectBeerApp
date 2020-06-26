import React, { Component } from 'react';
import { Label, Input, Button } from 'reactstrap';
import fire from '../Fire';
export default class FirebaseLogin extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            mail: "",
            password: ""
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassWord = this.handlePassWord.bind(this);
        this.login = this.login.bind(this);
    }

    handleUserName = (event) => {
        this.setState({
            mail: event.target.value
        })
    }
    handlePassWord = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    login(e) {

        fire.auth().signInWithEmailAndPassword(this.state.mail, this.state.password).then((u) => {
            localStorage.setItem('usermail', u.user.email);


            this.props.history.push("/home");

        }).catch((error) => {
            alert("Wrong username or password")
            console.log(error);
        })
    }
    signUp(e) {
        fire.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password).then((u) => {

            alert("Account Created Successfully")

        }).catch((error) => {
           alert(error.message)
        })

    }

    render() {

        return (
            <div>

                <Label>Username</Label>
                <Input type="text" placeholder="ABC" onChange={this.handleUserName}></Input>
                <Label>Password</Label>
                <Input type="password" placeholder="******" onChange={this.handlePassWord}></Input>

                <Button className="filterbutton" onClick={() => {
                    this.login();
                }}>Login</Button>
                <Button className="filterbutton" onClick={() => {
                    this.signUp();
                }}>SignUp</Button>



            </div>
        )
    }
}