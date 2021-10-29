import React, { Component } from "react";
import ListaDeNotas from "./componentes/listaDeNotas";
import FormularioCadasstro from "./componentes/FormularioCadasstro";
import './estilos.css'

export default class App extends Component {
  constructor()
  {
    super()
    this.state = {nota:[]}
  }
  criarNota(titulo, texto)
  {
    const obj = {titulo,texto}
    const novoArray = [...this.state.nota, obj]
    const novoEstado = {nota: novoArray};
    this.setState(novoEstado);
  }
  render()
  {
  return (
    <div>
      <FormularioCadasstro criarNota = {this.criarNota.bind(this)}/>
      <ListaDeNotas nota= {this.state.nota}/>
    </div>)
  };
} 
