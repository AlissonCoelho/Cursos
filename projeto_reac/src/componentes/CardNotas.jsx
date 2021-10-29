import React, { Component } from "react";


export default class CardNotas extends Component {
  render() {
    return (
          <header>
            <h3>{this.props.titulo}</h3>
            <p>{this.props.texto }</p>
          </header>
    );
  }
}
