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

  rescueCritter = critter => {
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
        <Form rescueCritter={this.rescueCritter} />
        <Habitat critters={this.state.critters} releaseCritter={this.releaseCritter} />
      </section>
    );
  }
}
