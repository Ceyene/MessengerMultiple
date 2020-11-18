import React, { Component } from "react";

class MensajesEnviados extends Component {
  render() {
    return (
      <div className="container_mensajes">
        <ul className="mensajes_recibidos">
          {this.props.messageReceived.map((message, index) => (
            <li className={message.read ? "read" : ""} key={index}>
              {message.text}
              <div>
                <button
                  className="mensaje_button"
                  onClick={this.props.readHandler(index)}
                >
                  <img
                    src="https://www.flaticon.es/svg/static/icons/svg/1632/1632596.svg"
                    alt="Mensaje leído"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <ul className="mensajes_enviados">
          {this.props.messageSent.map((message, index) => (
            <li key={index}>
              {message.text}
              <button
                className="mensaje_button"
                onClick={this.props.removeHandler(index)}
              >
                <img
                  src="https://www.flaticon.es/svg/static/icons/svg/1632/1632708.svg"
                  alt="Borrar mensaje"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MensajesEnviados;
