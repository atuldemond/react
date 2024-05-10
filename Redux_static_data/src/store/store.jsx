import { configureStore } from "@reduxjs/toolkit";
import Usersreducers from "../store/reducers/Usersreducer";

export const store = configureStore({
  reducer: {
    Usersreducers: Usersreducers,
  },
});
