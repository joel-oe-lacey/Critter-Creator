import React, { Component } from 'react';
import './App.scss';
import Habitat from '../Habitat/Habitat';
import Form from '../Form/Form';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      critters: []
    }
  }

  componentDidMount() {
    this.recallCritterRecords();
  }

  recallCritterRecords() {
    fetch('http://localhost:3001/api/v1/animals')
      .then(response => response.json())
      .then(critters => this.setState({ critters }))
  }

  houseCritter = ({id, name, diet, fun_fact}) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({id, name, diet, fun_fact}),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/api/v1/animals', options)
      .then(response => response.json())
      .then(critter => this.setState({ critters: [...this.state.critters, critter] }))
  }

  releaseCritter = id => {
    fetch(`http://localhost:3001/api/v1/animals/${id}`,{method:'DELETE'})
      .then(response => response.json())
      .then(critters => this.setState({ critters }))
  }

  render() {
    return (
      <section className="app">
        <Form houseCritter={this.houseCritter} />
        <Habitat critters={this.state.critters} releaseCritter={this.releaseCritter} />
      </section>
    );
  }
}
