import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const ResultScreen = ({navigation, route}) => {

    const { startColor, endColor } = route.params;

    return (
        <LinearGradient 
            style={styles.resultContainer}
            colors={[startColor, endColor]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <TouchableOpacity style={styles.redoButton} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.redoText}>Play Again</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default ResultScreen;