import { useState, useEffect } from "react";
import { 
    View,
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image,
    Keyboard
 } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { toggleAnswered, increaseScore } from "../TestScreenSlice";
import styles from "./styles";

const TextBoxAnswer = (props) => {

    //props
    const inputText = props.inputText;

    //Variables
    const [userAnswer, setUserAnswer] = useState(0);
    const [difference, setDifference] = useState(0);
    const [scoreIncrease, setScoreIncrease] = useState(0);

    //Navigation
    const route = useRoute();

    //Redux
    const dispatch = useDispatch();
    const questionNumber = useSelector((state) => state.testScreen.questionNumber);
    const answered = useSelector((state) => state.testScreen.answered);
    const currentAnswer = useSelector((state) => state.testScreen.currentAnswer);

    useEffect(() => {
        setDifference(Math.abs(currentAnswer - userAnswer));
    }, [difference, currentAnswer, userAnswer])

    const checkTapped = () => {
        if (difference === 0) {
            setScoreIncrease(5);
        }
        else if (difference === 1) {
            setScoreIncrease(3);
        }
        else if (difference === 2) {
            setScoreIncrease(1);
        }
        else {
            setScoreIncrease(0);
        }
        Keyboard.dismiss();
        dispatch(increaseScore(scoreIncrease));
        dispatch(toggleAnswered());
    }

    return (
        <>
            {route.params.type !== "Easy" && (
                <View style={{width: '100%', height: '100%'}}>
                    { questionNumber === 1 &&
                        <Text style={styles.tenPowerMessage}>(Answer to the 10th power)</Text>
                    }
                    <View style={styles.inputContainer} >
                        <TextInput 
                            style={[styles.input, {opacity: answered ? 0.5 : 1}]}
                            keyboardType='numbers-and-punctuation'
                            keyboardAppearance="dark"
                            onChangeText={setUserAnswer}
                            placeholder="Answer"
                            placeholderTextColor="#ffffff90"
                            editable={!answered}
                            ref={inputText}
                            autoCorrect={false}
                        />
                        <TouchableOpacity 
                            style={[styles.checkButton, {opacity: answered ? 0.5 : 1}]} 
                            onPress={checkTapped} 
                            disabled={answered}>
                            <Image 
                                style={styles.checkImage} 
                                source={require('../../../assets/Checkmark.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    { answered && (
                        <View style={{alignItems: 'center', marginTop: 30}}>
                            { difference === 0 &&
                                <Text style={styles.resultMessage}>You are correct!</Text>
                            }
                            { (difference !== 0) &&
                                <Text style={styles.resultMessage}>
                                    {`You are off by ${difference > 100 ? "more than 100" : difference}`} 
                                    {`\nThe correct answer was ${currentAnswer}`}
                                </Text>
                            }
                            <Text style={styles.resultMessage}>
                                Total score increased by {scoreIncrease} point{scoreIncrease == 1 ? '' : 's'}
                                </Text>
                        </View>
                    )
                    }
                </View>
            )
            }
        </>
    )
}

export default TextBoxAnswer;
