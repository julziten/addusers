import React, { Component } from 'react';
import './App.css';
import { users } from './users.json';
import AddUserForm  from './components/AddUserForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users
    };
  }

  handleAddUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  removeUser(index) {
    this.setState({
      users: this.state.users.filter((e, i) => {
        return i !== index;
      })
    })
  }


  render(){
    const users = this.state.users.map((user, i) => {
      return (
        <div className="box">
          <div>
            <h1>{user.name} {user.lastname}</h1>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </div>
          <button className="delete-button" onClick={this.removeUser.bind(this, i)}>Delete</button>
        </div>
      )
    })
    return (
      <div className="big-container">
        <nav>
          Users: {this.state.users.length}
          <h1> Add new user to the platform</h1>
        </nav>
        <AddUserForm onAddUser={this.handleAddUser}/>
        <div className="container">
          {users}
        </div>
      </div>

    )
  }
}

export default App;
