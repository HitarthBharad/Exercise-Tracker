import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/navbar.components'
import ExerciseList from './Components/exercise-list.componetns'
import EditExercise from './Components/edit-exercise.components'
import CreateExercise from './Components/create-exercise.components'
import CreateUser from './Components/create-user.components'

function App() {
  return (
    <Router>
      <div classname = 'container'>
      <Navbar />
      <br />
      <Route path = '/' exact component={ExerciseList} />
      <Route path = 'edit/:id' component={EditExercise} />
      <Route path = '/create' component={CreateExercise} />
      <Route path = '/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
