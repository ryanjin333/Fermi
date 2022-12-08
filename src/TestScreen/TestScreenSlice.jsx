import { createSlice } from "@reduxjs/toolkit";
import fermi from "../fermi";

const initialState = {
    questionNumber: 0,
    maxQuestions: 10,
    currentQuestion: "",
    currentAnswer: 0,
    questions: fermi.questions,
}

const testScreenSlice = createSlice({
    name: "testScreen",
    initialState: initialState,
    reducers: {
        resetAllQ: (state) => {
            state.questionNumber = 1;
            state.questions = fermi.questions;
        },
        setMaxQuestions: (state, action) => {
            state.maxQuestions = action.payload;
        },
        getQuestion: (state) => {
            const fermiKeys = Object.keys(fermi.questions);
            const fermiValues = Object.values(fermi.questions);
            const randFermiIndex = Math.floor(Math.random() * fermiKeys.length);
            state.currentQuestion = fermiKeys[randFermiIndex];
            state.currentAnswer = fermiValues[randFermiIndex];
            state.questionNumber += 1;
            
            //TODO: Delete not working
            delete state.questions[state.currentQuestion];
        }
    }
})

export const {
    resetAllQ, 
    setMaxQuestions, 
    getQuestion } = testScreenSlice.actions;
export default testScreenSlice.reducer;
