import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age:29
      },
      {
        name: 'Stephanie',
        age: 12
      }
    ]

  }

  switchNameHandler=() =>{
    console.log('Was clicked')
    this.setState({
      persons: [
        {
          name: 'Maximilian',
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 12
        }
      ]
    })
    
  }

  nameChangeHandler = (event) =>
  this.setState({
      persons: [
        {
          name: 'Max',
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: 'Stephanie',
          age: 12
        }
      ]
  })

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return <div className="App">
        <h1> Hi there</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
        click = {this.switchNameHandler}>
          Some Text
        </Person>
        <button style={style}
         onClick={()=> this.switchNameHandler('Maximil!!!!!')}>Switch Name</button>
      </div>;
  }
}

export default App;
