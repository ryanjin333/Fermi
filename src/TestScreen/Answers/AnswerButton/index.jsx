import { TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { resetAllQ, getQuestion } from "../../TestScreenSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";

const AnswerButton = () => {

    //Navigation
    const navigation = useNavigation();
    const route = useRoute();
    
    //Redux
    const dispatch = useDispatch();
    const questionNumber = useSelector((state) => state.testScreen.questionNumber);
    const maxQuestions = useSelector((state) => state.testScreen.maxQuestions);
    const currentAnswer = useSelector((state) => state.testScreen.currentAnswer);

    const answerTapped = () => {
        if (questionNumber + 1 > maxQuestions) {
            navigation.navigate("Result", {
                startColor: route.params.startColor,
                endColor: route.params.endColor,
            });
            dispatch(resetAllQ());
        }
        else {
            dispatch(getQuestion());
        }
    }

    return (
        <TouchableOpacity style={styles.answerButton} onPress={answerTapped}>
            <Text style={styles.answerText}>{currentAnswer}</Text>
        </TouchableOpacity>
    )
}

export default AnswerButton;