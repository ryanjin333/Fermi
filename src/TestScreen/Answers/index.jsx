import { View } from "react-native";
import styles from "./styles";
import AnswerButton from "./AnswerButton";

const Answers = () => {
    return (
        <View style={styles.answersContainer}>
            <AnswerButton id={0}/>
            <AnswerButton id={1}/>
            <AnswerButton id={2}/>
        </View>
    )
}

export default Answers;