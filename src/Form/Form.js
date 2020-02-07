import React, { Component } from 'react';
import './Form.scss';

export default class Form extends Component {
    constructor({ rescueCritter }) {
        super({ rescueCritter });
        this.state = {
            name: '',
            diet: '',
            fun_fact: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form className='form'>
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