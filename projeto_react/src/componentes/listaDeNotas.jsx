import React, { Component } from "react";
import CardNotas from "./CardNotas";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        {this.props.nota.map((notas,index) => {
          return(
              <li key = {index} >
                <CardNotas titulo={notas.titulo} texto={notas.texto}/>
              </li>) 
        })}
      </section>
    );
  }
}
