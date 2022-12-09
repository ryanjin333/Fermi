import { createSlice } from "@reduxjs/toolkit";
import fermi from "../fermi";

const initialState = {
    questionNumber: 0,
    maxQuestions: 10,
    currentQuestion: "",
    currentAnswer: 0,
    questions: fermi.questions,
    correctButtonId: 0,
    choices: [],
    score: 0,
}

const testScreenSlice = createSlice({
    name: "testScreen",
    initialState: initialState,
    reducers: {
        resetAllQ: (state) => {
            state.questionNumber = 0;
            state.questions = fermi.questions;
            state.score = 0;
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

            state.correctButtonId = Math.floor(Math.random() * 3);
            if (state.correctButtonId == 0) {
                state.choices = [
                    state.currentAnswer,
                    state.currentAnswer + 1,
                    state.currentAnswer + 2,
                ]
            }
            else if (state.correctButtonId == 1) {
                state.choices = [
                    state.currentAnswer - 1,
                    state.currentAnswer,
                    state.currentAnswer + 1,
                ]
            }
            else {
                state.choices = [
                    state.currentAnswer - 2,
                    state.currentAnswer - 1,
                    state.currentAnswer,
                ]
            }
            //TODO: Delete not working
            delete state.questions[state.currentQuestion];
        },
        increaseScore: (state) => {
            state.score += 1;
        }
    }
})

export const {
    resetAllQ, 
    setMaxQuestions, 
    getQuestion, 
    increaseScore } = testScreenSlice.actions;
export default testScreenSlice.reducer;
