import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const AnswerButton = () => {
    return (
        <TouchableOpacity style={styles.answerButton} onPress={() => console.warn("Tapped")}>
            <Text style={styles.answerText}>13</Text>
        </TouchableOpacity>
    )
}

export default AnswerButton;