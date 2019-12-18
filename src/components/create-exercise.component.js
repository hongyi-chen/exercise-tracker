import React, { Component  } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component{

    // creating a constructor
    constructor(props){
        super(props);

        // binding "this" to each of the methods to ensure that it is binded to right thing
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [] // state is how you create variables in react, whenever you update state, your page will update with new values
        }
    }

    // React lifecycle method, automatically calls right before anything displays onto page
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
    
    // whenever someone enters a username into this textbox, it'll activate this function
    onChangeUsername(e){
        //always use set state method in react
        this.setState({
            username: e.target.value // the target is the textbox, value is the value of the textbox
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }
    
    onChangeDate(date){
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));

        // take the person back to our homepage, goes back to list of exercises. 
        window.location = '/';
    }

    render(){
        return (
            // standard HTML form
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit = {this.onSubmi}>
                    <div className = "form-group">
                        <label>Username: </label>
                        <select ref = "userInput"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}>
                                {
                                    // getting the options from the users array
                                    // this.state.users references all of the users in our mongo db
                                    // .map allows us to return something for each user
                                    // for each user in the array, it returns an option
                                    this.state.users.map(function(user) {
                                        return <option
                                        key = {user}
                                        value = {user} > {user}
                                        </option>;
                                    })
                                }
                            </select>
                    </div>
                    <div className = "form-group">
                        <label>Description: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.description}
                            onChange = {this.onChangeDescription}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Duration(in minutes): </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.duration}
                            onChange = {this.onChangeDuration}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker
                                selected = {this.state.date}
                                onChange = {this.onChangeDate}
                                />
                        </div>
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value = "Create Exercise Log" className = "btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}