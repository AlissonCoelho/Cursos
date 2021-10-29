import React, { Component } from "react";

export default class FormularioCadasstro extends Component {
  constructor(props)
  {
    super(props);
    this.titulo ="";
  }
  _handlerMudancaTitulo(evento)
  {
    this.titulo = evento.target.value;
    
  }
  _handlerMudancaTexto(evento)
  {
    this.texto = evento.target.value;
    
  }
  _criarNota(evento)
  {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo,this.texto);
  }
  render() {
    return (
      <section>
        <form onSubmit = {this._criarNota.bind(this)}>
          <input type="text" placeholder="titulo" onChange = {this._handlerMudancaTitulo.bind(this)} />
          <textarea placeholder="escreva sua nota" onChange = {this._handlerMudancaTexto.bind(this)}></textarea>
          <button>Criar Nota</button>
        </form>
      </section>
    );
  }
}
