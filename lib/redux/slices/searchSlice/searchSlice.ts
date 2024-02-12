import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: SearchSliceState = {};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = SearchSlice.actions;

/* Types */
export interface SearchSliceState {
  searchTerm?: string;
}
