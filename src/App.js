import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            { name: 'max00', age: 21 },
            { name: 'max01', age: 29 },
            { name: 'max02', age: 20 }
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>H1 hej</h1>
                <button>Switch Name!</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                />
                <Person name="namn3" age="hårdkodad ålder" />
            </div>
        );
    }
}
export default App;
