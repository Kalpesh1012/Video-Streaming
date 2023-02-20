import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import SideBarSlice from "./SideBarSlice";
import PassSlice from "./PassSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    sideSlice: SideBarSlice,
    search: SearchSlice,
    pass: PassSlice,
    chat: ChatSlice,
  },
});

export default store;
