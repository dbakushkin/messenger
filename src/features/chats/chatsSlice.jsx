import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/api";

const initialState = {
  chats: [],
};

export const getChats = createAsyncThunk("chats/getChats", async () => {
  const response = await api.get("/chats");
  return response.data;
});

export const addChat = createAsyncThunk("chats/addChat", async (title) => {
  const response = await api.post(`/chats`, {
    title,
  });
  return response.data;
});

export const deleteChat = createAsyncThunk(
  "chats/deleteChat",
  async (chatId) => {
    const response = await api.delete(`/chats/${chatId}`);
    return response.data;
  }
);

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    });

    builder.addCase(addChat.fulfilled, (state, action) => {
      state.chats.push(action.payload);
    });
    builder.addCase(deleteChat.fulfilled, (state, action) => {
      state.chats = state.chats.filter(
        (item) => item._id !== action.payload._id
      );
    });
  },
});

export const selectChats = (state) => state.chats.chats;

export default chatsSlice.reducer;
