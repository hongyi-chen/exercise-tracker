import React, { Component  } from "react";
import axios from 'axios';

export default class CreateUsers extends Component{
    // creating a constructor
    constructor(props){
        super(props);

        // binding "this" to each of the methods to ensure that it is binded to right thing
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    // whenever someone enters a username into this textbox, it'll activate this function
    onChangeUsername(e){
        //always use set state method in react
        this.setState({
            username: e.target.value // the target is the textbox, value is the value of the textbox
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        // axios.post('http://localhost:5000/exercises/add', user
        // .then(res => console.log(res.data));

        // take the person back to our homepage, goes back to list of exercises. 
        this.setState({
            username:''
        })     
    }

    render(){
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Username: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername} />
                    </div>
                    <div className = "form-group">
                        <input type = "submit" value = "Create User" className = "btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}