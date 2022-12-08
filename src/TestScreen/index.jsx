import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import styles from "./styles";
import Nav from "./Nav";
import Answers from "./Answers";

const TestScreen = ({navigation, route}) => {

    const questionNumber = useSelector((state) => state.testScreen.questionNumber);
    const maxQuestions = useSelector((state) => state.testScreen.maxQuestions);
    const currentQuestion = useSelector((state) => state.testScreen.currentQuestion);
    const {startColor, endColor } = route.params;

    return (
        <LinearGradient 
            colors={[startColor, endColor]}
            style={styles.screenContainer}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <Nav />
            <Text style={styles.questionCounter}>question {questionNumber} of {maxQuestions}</Text>
            <Text style={styles.question}>{currentQuestion}</Text>
            <Answers/>
        </LinearGradient>
    )
}

export default TestScreen;