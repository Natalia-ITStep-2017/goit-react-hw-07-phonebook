import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://648c59d18620b8bae7ecbff4.mockapi.io/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("https://648c59d18620b8bae7ecbff4.mockapi.io/contacts", { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`https://648c59d18620b8bae7ecbff4.mockapi.io/contacts/${id}`);
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);