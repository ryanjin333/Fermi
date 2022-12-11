import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

const ScoreInfo = () => {

    const score = useSelector((state) => state.testScreen.score);
    const maxQuestions = useSelector((state) => state.testScreen.maxQuestions);
    const rawScore = score / maxQuestions;

    return (
        <View style={styles.resultContainer}>
            <Text style={styles.result}>You Scored {score}/{maxQuestions}</Text>
                <Image style={styles.resultImage} source={rawScore < 0.5 ? 
                    require('../../../assets/trash.png') : require('../../../assets/trophy.png')} />
        </View>
    )
}

export default ScoreInfo;