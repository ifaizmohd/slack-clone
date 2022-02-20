import { Button } from "@mui/material";
import { ChatInputContainer } from "./chat-input.styles";
import { auth, DB } from "../../firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId, chatRef }) {
  const [message, setMessage] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    try {
      await addDoc(collection(DB, "rooms", channelId, "messages"), {
        message: message,
        timestamp: serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
      chatRef?.current?.scrollIntoView({
        behavior: "smooth",
      });
      setMessage("");
      console.log("message has been sent successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message ${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND MESSAGE
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
