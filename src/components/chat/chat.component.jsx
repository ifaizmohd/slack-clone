import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useRef } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import { DB, auth } from "../../firebase";
import ChatInput from "../chat-input/chat-input.component";
import Message from "../message/message.component";
import {
  ChatBottom,
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from "./chat.styles";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [userDetails] = useAuthState(auth);
  const [roomDetails] = useDocument(roomId && doc(DB, "rooms", roomId));
  const [roomMessages, loading, error] = useCollection(
    roomId && collection(DB, "rooms", roomId, "messages")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();

            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userDetails?.photoURL}
              />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput
          chatRef={chatRef}
          channelId={roomId}
          channelName={roomDetails?.data().name}
        />
      </>
    </ChatContainer>
  );
}

export default Chat;
