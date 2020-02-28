import React from "react";

import "./styles.css";
import ChatTab from "../ChatTab/ChatTab";

class ChatList extends React.Component {
  render() {
    const chats = [
      {
        name: "Hackathon Group",
        latestMessage: "What is your idea?"
      },
      {
        name: "MH1812 Discrete",
        latestMessage: "End my suffering"
      }
    ];
    return (
      <div className="chat-list">
        {chats.map(chat => {
          return (
            <ChatTab
              name={chat.name}
              latestMessage={chat.latestMessage}
              onClick={this.props.onChatSelect}
            />
          );
        })}
      </div>
    );
  }
}

export default ChatList;
