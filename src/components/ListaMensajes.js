import React, { Component } from "react";
import Mensajero from "./Mensajero";
import MensajesEnviados from "./MensajesEnviados";
import "../styles.css";

class ListaMensajes extends Component {
  state = {
    components: [
      {
        name: "Cyn",
        inputText: "",
        messagesSent: [],
        messagesReceived: [
          {
            text: "Hola",
            read: false,
          },
          {
            text: "Qué tal",
            read: false,
          },
        ],
      },
      {
        name: "Maru",
        inputText: "",
        messagesSent: [],
        messagesReceived: [
          {
            text: "Hey",
            read: false,
          },
          {
            text: "Cómo va todo",
            read: false,
          },
        ],
      },
      {
        name: "Eli",
        inputText: "",
        messagesSent: [],
        messagesReceived: [
          {
            text: "Qué onda",
            read: false,
          },
          {
            text: "ʕ•́ᴥ•̀ʔっ",
            read: false,
          },
        ],
      },
    ],
  };

  //manejo el estado del input del Mensajero
  writeHandler = (id) => {
    return (e) => {
      const copiaDeComponentes = [...this.state.components];
      copiaDeComponentes[id].inputText = e.target.value;
      this.setState({ components: copiaDeComponentes });
    };
  };

  //elimina mensajes enviados
  removeHandler = (i) => {
    return (index) => {
      return () => {
        const ToDoFiltered = [...this.state.components];
        ToDoFiltered[i].messagesSent.splice(index, 1);
        this.setState({ components: ToDoFiltered });
      };
    };
  };

  //marca mensajes como leídos
  readHandler = (i) => {
    return (index) => {
      return () => {
        const readMessage = [...this.state.components];
        if (readMessage[i].messagesReceived[index].read === true) {
          readMessage[i].messagesReceived[index].read = false;
        } else {
          readMessage[i].messagesReceived[index].read = true;
        }
        this.setState({ components: readMessage });
      };
    };
  };

  //enviar mensajes escritos en el input
  addHandler = (id) => {
    return (e) => {
      const newComponents = [...this.state.components]; // Crear nuevo array con el valor nuevo del input
      //agrega nuevo mensaje enviado al array del mensajero
      newComponents[id].messagesSent.push({
        text: newComponents[id].inputText,
        read: false,
      });
      newComponents[id].inputText = ""; //borra lo que había en el input
      this.setState({ components: newComponents });
    };
  };

  render() {
    return (
      <div className="messages-container">
        <h3 className="messages-total">Mensajes en la nube:</h3>
        {this.state.components[0].messagesReceived.map((msg) => (
          <span className={msg.read ? "read" : ""}>{msg.text}</span>
        ))}
        {this.state.components[1].messagesReceived.map((msg) => (
          <span className={msg.read ? "read" : ""}>{msg.text}</span>
        ))}
        {this.state.components[2].messagesReceived.map((msg) => (
          <span className={msg.read ? "read" : ""}>{msg.text}</span>
        ))}
        {this.state.components[0].messagesSent.map((msg) => (
          <span className={msg.read ? "read" : ""}>{msg.text}</span>
        ))}
        {this.state.components[1].messagesSent.map((msg) => (
          <span className={msg.read ? "read" : ""}>{msg.text}</span>
        ))}
        {this.state.components[2].messagesSent.map((msg) => (
          <span className={msg.read ? "read" : ""}>{msg.text}</span>
        ))}
        <div className="messages">
          {this.state.components.map((component, index) => (
            <div className="contenedor">
              <h4 className="userName">{this.state.components[index].name}</h4>
              <MensajesEnviados
                key={index}
                removeHandler={this.removeHandler(index)}
                readHandler={this.readHandler(index)}
                formValues={this.state.components[index]}
                messageSent={component.messagesSent}
                messageReceived={component.messagesReceived}
              />
              <Mensajero
                key={component.name}
                name={component.name}
                formValues={this.state.components[index]}
                writeHandler={this.writeHandler(index)}
                addHandler={this.addHandler(index)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListaMensajes;
