import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { resetAllQ } from "../TestScreen/TestScreenSlice";
import styles from "./styles";
import ScoreInfo from "./ScoreInfo";

const ResultScreen = ({navigation, route}) => {

    const { startColor, endColor } = route.params;
    
    const dispatch = useDispatch();

    const exitTapped = () => {
        navigation.navigate("Home");
        dispatch(resetAllQ());
    }

    return (
        <LinearGradient 
            style={styles.resultContainer}
            colors={[startColor, endColor]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <ScoreInfo />
            <TouchableOpacity style={styles.redoButton} onPress={exitTapped}>
                <Text style={[styles.redoText, {color: endColor}]}>Exit</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default ResultScreen;