import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

const ScoreInfo = () => {

    //Navigation
    const route = useRoute();

    //Redux
    const score = useSelector((state) => state.testScreen.score);
    const maxQuestions = useSelector((state) => state.testScreen.maxQuestions);
    const maxScore = route.params.type === "Easy" ? maxQuestions : maxQuestions * 5;
    const rawScore = score / maxScore;

    return (
        <View style={styles.resultContainer}>
            <Text style={styles.result}>You Scored {score}/{maxScore}</Text>
                <Image style={styles.resultImage} source={rawScore < 0.5 ? 
                    require('../../../assets/trash.png') : require('../../../assets/trophy.png')} />
        </View>
    )
}

export default ScoreInfo;