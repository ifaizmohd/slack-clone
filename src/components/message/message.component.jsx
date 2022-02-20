import React from "react";
import { MessageContainer, MessageInfo } from "./message.styles";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="user" />
      <MessageInfo>
        <h4>{user}</h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
