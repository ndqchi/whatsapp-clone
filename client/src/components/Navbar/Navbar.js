import React from "react";

import "./styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="app-icon">
        <img src = "https://cdn0.iconfinder.com/data/icons/smashicons-dialogue-flat-vol-1/58/38_-_Whatsapp_communication_dialogue_discussion-512.png"/>
        </div>
        <div className="app-name">WHATSAPP WEB</div>
        <div className="chat-name">
          <strong>{this.props.chatName}</strong>
        </div>
      </header>
    );
  }
}

export default Navbar;
