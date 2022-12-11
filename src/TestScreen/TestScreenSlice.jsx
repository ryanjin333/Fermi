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
    booleanChoices: [true, true, true],
    score: 0,
    answered: false,
    correct: false,
    timerKey: 0,
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
            state.answered = false;
            state.booleanChoices = [true, true, true];
            state.timerKey += 1;
            //TODO: Delete not working
            delete state.questions[state.currentQuestion];
        },
        increaseScore: (state) => {
            state.score += 1;
        },
        toggleAnswered: (state) => {
            state.answered = true;
            state.booleanChoices.forEach((val, i) => {
                i === state.correctButtonId ? state.booleanChoices[i] = true : state.booleanChoices[i] = false;
            })
        },
        setCorrectState: (state, action) => {
            state.correct = action.payload;
        }
    }
})

export const {
    resetAllQ, 
    setMaxQuestions, 
    getQuestion, 
    increaseScore,
    toggleAnswered,
    setCorrectState } = testScreenSlice.actions;
export default testScreenSlice.reducer;
