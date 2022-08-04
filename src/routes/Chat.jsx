import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import {
  connect,
  getMessages,
  selectMessages,
  submitForm,
} from "../features/chats/messagesSlice";
import Message from "../features/chats/Message";
import MessageForm from "../features/chats/MessageForm";
import styled from "styled-components";

const Chat = () => {
  const { chatId } = useParams();
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const messagesRef = useRef();
  useEffect(() => {
    dispatch(getMessages(chatId));
    dispatch(connect());
  }, [chatId]);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = (data) => {
    const message = {
      name: user.name,
      text: data.text,
      chatId,
      imageURL: data.imageURL,
      location: data.location,
    };
    dispatch(submitForm(message));
  };

  console.log(messages);
  return (
    <div>
      <h1>chat {chatId}</h1>
      <SMessages ref={messagesRef}>
        {messages.map((message) => (
          <div key={message._id} className="mb-3">
            <Message key={message._id} message={message} />
          </div>
        ))}
      </SMessages>
      {isAuthenticated ? (
        <MessageForm onSubmit={handleSubmit} />
      ) : (
        <div>Вы не авторизованы</div>
      )}
    </div>
  );
};

export default Chat;

const SMessages = styled.div`
  max-heigsht: 50vh;
  overflow: scroll;
`;
