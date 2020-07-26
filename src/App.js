import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

class App extends Component {
    state = {
        persons: [
            {name: 'Dynamax', age:28},
            {name: 'Aryan', age:27},
            {name: 'Gabite', age:21}
        ],
        otherState: 'some other value',
        showPerson: false
    }

    switchNameHandler = (newName) =>{
        //DON'T do the the Following because its mutating the code
        this.state.persons[2].name="Garchomp";
        this.setState({
            persons: [
                {name: newName, age:42},
                {name: 'Aryan', age:27},
                {name: 'Garchomp', age:25}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.state.persons[2].name = "Garchomp";
        this.setState({
            persons: [
                {name: 'Dynamax', age: 28},
                {name: event.target.value, age: 27},
                {name: 'Gabite', age: 21}
            ]
        })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Assignment #1
                    </p>
                    <button onClick={this.togglePersonHandler}>Switch Name</button>
                    <div>
                        {this.state.showPerson ?
                            <div>
                                <Person
                                    name={this.state.persons[0].name}
                                    age={this.state.persons[0].age}/>
                                <Person
                                    name={this.state.persons[1].name}
                                    age={this.state.persons[1].age}
                                    click={this.switchNameHandler.bind(this, 'Dynamite')}
                                    change={this.nameChangeHandler}>My Hobbies: Photography</Person>
                                <Person
                                    name={this.state.persons[2].name}
                                    age={this.state.persons[2].age}/>
                            </div>
                        : null}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;

/* -- REACT BASICS INTRO LESSON - Initial Copy Before Assignment 1 --
*
* class App extends Component {
  state = {
    persons: [
      {name: 'Dynamax', age:28},
      {name: 'Aryan', age:27},
      {name: 'Gabite', age:21}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) =>{
    //DON'T do the the Following because its mutating the code
    this.state.persons[2].name="Garchomp";
    this.setState({
      persons: [
        {name: newName, age:42},
        {name: 'Aryan', age:27},
        {name: 'Garchomp', age:25}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.state.persons[2].name = "Garchomp";
    this.setState({
      persons: [
        {name: 'Dynamax', age: 28},
        {name: event.target.value, age: 27},
        {name: 'Gabite', age: 21}
      ]
    })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Assignment #1
            </p>
            <button onClick={() => this.switchNameHandler("Dynamo-mo")}>Switch Name</button>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Dynamite')}
            change={this.nameChangeHandler}>My Hobbies: Photography</Person>
            <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
          </header>
        </div>
    );
  }
}
* */


/* React hooks post v.16
  -- A collection of function that are exposed by react to allow for functional usage.

import React,  {useState} from 'React';
import './App.css';
import Person from './Components/Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
      persons: [
        {name: 'Dynamax', age:28},
        {name: 'Aryan', age:27},
        {name: 'Gabite', age:21}
      ]
  });

  useState({otherState, '"'Value for other state"});
  // or useState('Value for other state');
  // or const [otherState, setOtherState] = useState({
      'Value for Other State'
  });

  // -- REACT ALLOWS FOR OTHER FUNCTIONS TO RESIDE WITHIN A FUNCTION
  const switchNameHandler = () =>{
    setPersonState({
      persons: [
        {name: 'Dynamax', age:42},
        {name: 'Aryan', age:27},
        {name: 'Garchomp', age:25}
      ]
    })
  }

  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> test
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Photography</Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
          </header>
        </div>
    );
}

* */

/* -- Assignment 1 -- Done
* class App extends Component {
  state = {
    username: 'Chandan Thakur'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
        <div className="App">
          <UserOutput username={this.state.username}/>
          <UserOutput username='Aryan Thkaur'/>
          <UserInput change={this.usernameChangeHandler}
                      currentName={this.state.username}/>
        </div>
    );
  }
}
* */
