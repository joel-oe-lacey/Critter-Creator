import React, { Component } from 'react';
import './Form.scss';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            diet: '',
            fun_fact: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    rescueCritter = e => {
        const { houseCritter } = this.props;
        e.preventDefault();
        const newCritter = { ...this.state, id: Date.now() };
        houseCritter(newCritter);
        this.resetInputs();
    }

    resetInputs = () => {
        this.setState({
            name: '',
            diet: '',
            fun_fact: ''
        })
    }

    render() {
        return (
            <form className='form'>
                <h1>Critter Creator!</h1>
                <input 
                    type='text'
                    placeholder='Name...'
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='Diet...'
                    value={this.state.diet}
                    name='diet'
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='Fun Fact...'
                    value={this.state.fun_fact}
                    name='fun_fact'
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.rescueCritter}
                >
                    Rescue!
                </button>
            </form>
        )
    }
}