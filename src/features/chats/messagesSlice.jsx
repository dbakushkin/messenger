import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/api";

const initialState = {
  messages: [],
  isConnected: false,
  isConnecting: false,
};

export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (chatId) => {
    const response = await api.get(`/chats/${chatId}/messages`);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    connect: (state, action) => {
      state.isConnecting = true;
    },
    connected: (state) => {
      state.isConnected = true;
    },
    addMessage: (state, action) => {
      state.messages = [...state.messages, action.payload]
    },
    submitForm: (state) => {
      return  
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export const selectMessages = (state) => state.messages.messages;
export const { connect, connected, addMessage, submitForm } = messagesSlice.actions;
export default messagesSlice.reducer;
