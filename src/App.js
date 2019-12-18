import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    // put everything that we want to use with a Router in a router element
    // we have a few components - e.g, Navbar, exerciselist, etc. 
    // path attribute is set to URL path, if you include these paths it'll go to the component
    <Router>
      <div className = "container"> 
        <Navbar/>
        <br/>
        <Route path="/" exact component = {ExercisesList} />
        <Route path="/edit/:id" component = {EditExercise} />
        <Route path="/create" component = {CreateExercise} />
        <Route path="/user" component = {CreateUser} />
      </div>
      </Router>
  );
}

export default App;
