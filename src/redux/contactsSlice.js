import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import {
  handlePending,
  handleRejected,
  handleFetchContactsFulfilled,
  handleAddContactFulfilled,
  handleDeleteContactFulfilled
} from "./handlers";



const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addMatcher((action) => {
        action.type.endsWith('/pending')
      }, handlePending)
      .addMatcher((action) => {
        action.type.endsWith('/rejected')
      }, handleRejected)
  }

});

export const contactsReducer = contactsSlice.reducer;