import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connect, getMessages, selectMessages, submitForm } from "../features/chats/messagesSlice";
import Message from "../features/chats/Message";
import MessageForm from "../features/chats/MessageForm";

const Chat = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  useEffect(() => {
    dispatch(getMessages(chatId));
    dispatch(connect())
  }, [chatId]);
  const handleSubmit = (data) => {
    const message = {
      name: data.name,
      text: data.text,
      chatId  
    }
    dispatch(submitForm(message))
  }

  console.log(messages);
  return (
    <div>
      <h1>chat {chatId}</h1>
      {messages.map((message) => (
        <div key={message._id} className="mb-3">
          <Message key={message._id} message={message} />
        </div>
      ))}
      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;
