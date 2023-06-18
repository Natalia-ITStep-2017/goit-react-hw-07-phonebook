import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;


export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  if (contacts) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()))
  }
})