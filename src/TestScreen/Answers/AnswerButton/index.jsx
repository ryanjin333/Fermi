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

    //Change to exponent
    function decode_superscript(text) {
        var map = {
            "0":"⁰","1":"¹", "2":"²",  "3":"³", "4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};
        var charArray = text.toString().split("");
        for(var i = 0; i < charArray.length; i++) {
            if( map[charArray[i].toLowerCase()] ) {
                charArray[i] = map[charArray[i]];
            }
        }
        text = charArray.join("");
        return text;
    }



    return (
        <TouchableOpacity style={styles.answerButton} onPress={answerTapped}>
            <Text style={styles.answerText}>10{decode_superscript(currentAnswer)}</Text>
        </TouchableOpacity>
    )
}

export default AnswerButton;