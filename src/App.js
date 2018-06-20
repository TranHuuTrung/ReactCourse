import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  constructor (props){
    super(props);
    this.state={
      isHidden: true,
      persons: [
        {id: 1,name: 'Trung', age: 21},
        {id: 2,name: 'Thu', age: 19},
        {id: 3,name: 'Hieu', age: 13}
      ]
    }
  }
  onToggle = () => {
    this.setState({ isHidden: !this.state.isHidden });
    console.log(this.classes);
    
  }
  onDeletePerson = (id) =>{
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }
  render() {
    const styleBtn = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '5px 15px'
    }
    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    var listPerson = null;
    if(this.state.isHidden === false){
      listPerson =  this.state.persons.map( (person, index) => {
        return <Person key={index} name={person.name} click={()=>this.onDeletePerson(person.id)}/>
      });
      styleBtn.backgroundColor= 'red';
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

        </p>
        <p className={classes.join(' ')}>List person</p>
        <button onClick={this.onToggle} style={styleBtn}>Toggle</button>
        {listPerson}
      </div>
    );
  }
}

export default App;
