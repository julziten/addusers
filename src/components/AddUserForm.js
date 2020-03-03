import React, { Component } from 'react';

class AddUserForm extends Component {
    constructor(){
        super();
        this.state = {
            'name': '',
            'lastname': '',
            'email': '',
            'age': ''
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submiting form...');
        this.props.onAddUser(this.state);
        alert('Sending...');
    }

    render() {
        return(
            <form className="add-form" onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={this.handleInput}/>
                <input type="text" name="lastname" placeholder="Apellido" onChange={this.handleInput}/>
                <input type="email" name="email" placeholder="E-mail" onChange={this.handleInput}/>
                <input type="number" name="age" placeholder="Edad" onChange={this.handleInput}/>
                <button type="submit">Add User</button>
            </form>
        )
    }
}

export default AddUserForm;