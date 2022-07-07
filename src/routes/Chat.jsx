import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
      name: data.name,
      text: data.text,
      chatId,
      imageURL: data.imageURL,
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
      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;

const SMessages = styled.div`
  max-height: 50vh;
  overflow: scroll;
`;
