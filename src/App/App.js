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

  houseCritter = critter => {
    this.setState({critters: [...this.state.critters, critter]});
  }

  releaseCritter = id => {
    const remainingCritters = this.state.critters.filter(critter => {
      return critter.id !== id;
    })
    this.setState({ critters: remainingCritters })
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
