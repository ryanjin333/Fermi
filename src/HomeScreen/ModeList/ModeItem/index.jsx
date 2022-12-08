import { Image, View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { getQuestion } from "../../../TestScreen/TestScreenSlice";
import styles from "./styles";
import fermi from "../../../fermi";

const ModeItem = (props) => {

    //Navigation
    const { title, subtitle, startColor, endColor } = props.mode;
    const navigation = useNavigation();


    //Redux
    const dispatch = useDispatch();
    const currentQuestion = useSelector((state) => state.testScreen.currentQuestion);
    const answerTapped = () => {
        navigation.navigate("Test", {
            type: title,
            startColor: startColor,
            endColor: endColor,
        });
        dispatch(getQuestion());
    }
    

    return (
    <View style={styles.modeItemContainer}>
        <TouchableOpacity style={styles.modeItemButton} onPress={answerTapped}>
            <LinearGradient
                colors={[startColor, endColor]}
                style={styles.modeItemBackground}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
            >
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Image style={styles.startButton} source={require('../../../../assets/StartButton.png')} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    </View>
    )
}

export default ModeItem;