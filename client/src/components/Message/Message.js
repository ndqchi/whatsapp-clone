import React from "react";

import "./styles.css";

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="Avatar"
        />
        <div className="message-content">
          <h4>{this.props.user}</h4>
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default Message;
