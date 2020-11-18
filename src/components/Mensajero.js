import React, { Component } from "react";

class Mensajero extends Component {
  render() {
    return (
      <div className="formulario">
        <input
          type="text"
          value={this.props.formValues.inputText}
          onChange={this.props.writeHandler}
        />
        <button onClick={this.props.addHandler}>Enviar</button>
      </div>
    );
  }
}

export default Mensajero;
