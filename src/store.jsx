import { configureStore } from "@reduxjs/toolkit";
import testScreenSlice from "./TestScreen/TestScreenSlice";

const store = configureStore({
    reducer: {
        testScreen: testScreenSlice
    }
});

export default store;