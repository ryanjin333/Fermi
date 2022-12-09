import { TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { resetAllQ, getQuestion, increaseScore } from "../../TestScreenSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";

const AnswerButton = ({id}) => {

    //Navigation
    const navigation = useNavigation();
    const route = useRoute();
    
    //Redux
    const dispatch = useDispatch();
    const questionNumber = useSelector((state) => state.testScreen.questionNumber);
    const maxQuestions = useSelector((state) => state.testScreen.maxQuestions);
    const currentAnswer = useSelector((state) => state.testScreen.currentAnswer);
    const choice = useSelector((state) => state.testScreen.choices[id]);
    const correctButtonId = useSelector((state) => state.testScreen.correctButtonId);

    const answerTapped = () => {
        if (questionNumber + 1 > maxQuestions) {
            navigation.navigate("Result", {
                startColor: route.params.startColor,
                endColor: route.params.endColor,
            });
        }
        else {
            if (id == correctButtonId) {
                dispatch(increaseScore());
            }
            dispatch(getQuestion());
        }
    }

    //Change to exponent
    function encode_superscript(text) {
        var map = {
            "0":"⁰","1":"¹","2":"²","3":"³", "4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"
        };
        var charArray = text.toString().split("");
        for(var i = 0; i < charArray.length; i++) {
            if(map[charArray[i]]) {
                charArray[i] = map[charArray[i]];
            }
        }
        text = charArray.join("");
        return text;
    }

    return (
        <TouchableOpacity style={styles.answerButton} onPress={answerTapped}>
            <Text style={styles.answerText}>10{encode_superscript(choice)}</Text>
        </TouchableOpacity>
    )
}

export default AnswerButton;