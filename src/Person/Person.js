import React, { Component } from 'react';
class Person extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const stylePerson = {
      width: '50%',
      padding: '10px 20px',
      margin: '10px auto',
      border: '1px solid #eee'
    }
    return(
      <div style={stylePerson} onClick={this.props.click}>
        <p>My name is {this.props.name}</p>
      </div>
    );
  }
}
export default Person;