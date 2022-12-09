import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

const ScoreInfo = () => {

    const score = useSelector((state) => state.testScreen.score)

    return (
        <View style={styles.resultContainer}>
            <Text style={styles.result}>You Scored {score}/10</Text>
                <Image style={styles.resultImage} source={score < 5 ? 
                    require('../../../assets/trash.png') : require('../../../assets/trophy.png')} />
            <Text style={styles.allTimeBest}>All time best: 9/10</Text>
        </View>
    )
}

export default ScoreInfo;