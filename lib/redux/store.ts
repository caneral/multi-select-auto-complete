import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { SearchSlice } from "./slices/searchSlice/searchSlice";

const store = configureStore({
  reducer: {
    search: SearchSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
