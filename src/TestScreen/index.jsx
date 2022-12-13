import { useRef } from "react";
import { 
    View, 
    Text,
    Image, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import { getQuestion } from "./TestScreenSlice";
import styles from "./styles";
import Nav from "./Nav";
import Answers from "./Answers";
import TextBoxAnswer from "./TextBoxAnswer";

const TestScreen = ({navigation, route}) => {

    //Variables
    const inputText = useRef();

    //Redux
    const dispatch = useDispatch();
    const questionNumber = useSelector((state) => state.testScreen.questionNumber);
    const maxQuestions = useSelector((state) => state.testScreen.maxQuestions);
    const currentQuestion = useSelector((state) => state.testScreen.currentQuestion);
    const answered = useSelector((state) => state.testScreen.answered);

    //Navigation
    const {type, startColor, endColor } = route.params;

    const continueTapped = () => {
        if (questionNumber + 1 > maxQuestions) {
            navigation.navigate("Result", {
                type: type,
                startColor: startColor,
                endColor: endColor,
            });
        }
        else {
            dispatch(getQuestion());
        }
        if (route.params.type !== "Easy") {
            inputText.current.clear();
        }
        
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <LinearGradient 
                colors={[startColor, endColor]}
                style={styles.screenContainer}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
            <SafeAreaView style={styles.safeAreaContainer} edges={['right', 'left', 'top']}>
                <Nav />
                <View style={styles.infoContainer}>
                    <Text style={styles.questionCounter}>question {questionNumber} of {maxQuestions}</Text>
                    { answered &&
                        <TouchableOpacity style={styles.continueButton} onPress={continueTapped}>
                            <Image style={styles.continueImage} source={require('../../assets/RightArrow.png')}/>
                        </TouchableOpacity>
                    }
                </View>
                <Text style={styles.question} adjustsFontSizeToFit={true} numberOfLines={4}>{currentQuestion}</Text>
                <TextBoxAnswer inputText={inputText} />
                <Answers/>
            </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

export default TestScreen;