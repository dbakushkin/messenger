import { configureStore } from "@reduxjs/toolkit";
import chatMiddleware from "../features/chats/chatMiddleWare";
import chatsSlice from "../features/chats/chatsSlice";
import messagesSlice from "../features/chats/messagesSlice";

export const store = configureStore({
  reducer: {
    chats: chatsSlice,
    messages: messagesSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(chatMiddleware)
  }
});
