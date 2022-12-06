import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Nav from "./Nav";
import Answers from "./Answers";

const TestScreen = ({navigation, route}) => {

    return (
        <View>
            <LinearGradient 
                colors={[route.params.startColor, route.params.endColor]}
                style={styles.screenContainer}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <Nav />
                <Text style={styles.questionCounter}>question 1 of 10</Text>
                <Text style={styles.question}>How many cells are in the typical human body?</Text>
                < Answers/>
            </LinearGradient>
        </View>
    )
}

export default TestScreen;