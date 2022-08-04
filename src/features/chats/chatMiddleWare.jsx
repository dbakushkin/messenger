import { io } from "socket.io-client";
import { addMessage, connect, connected, submitForm } from "./messagesSlice";

 let socket

const chatMiddleware = (store) => (next) => (action) => {
  const isConnecting = store.getState().messages.isConnecting
    if (connect.match(action) && !isConnecting) {
     socket = io(process.env.REACT_APP_API_URL);

    socket.on("connect", () => {
        console.log("connected")
        store.dispatch(connected())
    } )
    socket.on("new message", (message) => {
      console.log(message);
      store.dispatch(addMessage(message))
    });
  }
  if(submitForm.match(action) && socket) {
    socket.emit("new message", action.payload)
  }
  next(action)
};

export default chatMiddleware;
