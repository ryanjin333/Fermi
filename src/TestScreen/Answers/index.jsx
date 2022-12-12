import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import AnswerButton from "./AnswerButton";

const Answers = () => {

    //Navigation
    const route = useRoute();

    //Redux
    const answered = useSelector((state) => state.testScreen.answered);
    const correct = useSelector((state) => state.testScreen.correct);

    //Native Hooks

    return (
        <View style={styles.answersContainer}>
            { route.params.type === "Easy" &&
                <View style={styles.multipleChoiceContainer}>
                <AnswerButton id={0}/>
                <AnswerButton id={1}/>
                <AnswerButton id={2}/>
                { answered &&
                    <Text style={styles.result}>{ correct ? "You are correct!" : "You are incorrect."}</Text>
                }
            </View>
            }
    </View>
    )
}

export default Answers;