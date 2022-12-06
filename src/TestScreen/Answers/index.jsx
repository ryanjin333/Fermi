import { View } from "react-native";
import styles from "./styles";
import AnswerButton from "./AnswerButton";

const Answers = () => {
    return (
        <View style={styles.answersContainer}>
            <AnswerButton />
            <AnswerButton />
            <AnswerButton />
        </View>
    )
}

export default Answers;