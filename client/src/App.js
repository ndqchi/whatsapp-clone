import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import ChatList from "./components/ChatList/ChatList";
import ChatColumn from "./components/ChatColumn/ChatColumn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: "Welcome to WhatsApp"
    };
  }
  handleChatClick = newChatName => {
    this.setState({
      chatName: newChatName
    });
  };
  render() {
    return (
      <div className="container">
        <Navbar chatName={this.state.chatName} />
        <div className="content">
          <ChatList onChatSelect={this.handleChatClick} />
          <ChatColumn />
        </div>
      </div>
    );
  }
}

export default App;
