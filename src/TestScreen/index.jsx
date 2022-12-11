import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import { getQuestion } from "./TestScreenSlice";
import styles from "./styles";
import Nav from "./Nav";
import Answers from "./Answers";

const TestScreen = ({navigation, route}) => {

    const dispatch = useDispatch();
    const questionNumber = useSelector((state) => state.testScreen.questionNumber);
    const maxQuestions = useSelector((state) => state.testScreen.maxQuestions);
    const currentQuestion = useSelector((state) => state.testScreen.currentQuestion);
    const answered = useSelector((state) => state.testScreen.answered);


    const {startColor, endColor } = route.params;

    const continueTapped = () => {
        if (questionNumber + 1 > maxQuestions) {
            navigation.navigate("Result", {
                startColor: startColor,
                endColor: endColor,
            });
        }
        else {
            dispatch(getQuestion());
        }
    }

    return (
        <LinearGradient 
            colors={[startColor, endColor]}
            style={styles.screenContainer}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <Nav />
            <View style={styles.infoContainer}>
                <Text style={styles.questionCounter}>question {questionNumber} of {maxQuestions}</Text>
                { answered &&
                    <TouchableOpacity style={styles.continueButton} onPress={continueTapped}>
                        <Image style={styles.continueImage} source={require('../../assets/RightArrow.png')}/>
                    </TouchableOpacity>
                }
            </View>
            <Text style={styles.question}>{currentQuestion}</Text>
            <Answers/>
        </LinearGradient>
    )
}

export default TestScreen;