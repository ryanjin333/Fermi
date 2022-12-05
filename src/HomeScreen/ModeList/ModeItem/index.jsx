import { Image, View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const ModeItem = (props) => {

    const { title, subtitle, startColor, endColor, type } = props.mode;
    const navigation = useNavigation();

    return (
    <View style={styles.modeItemContainer}>
        <TouchableOpacity style={styles.modeItemButton} onPress={() => navigation.navigate("Test", { type: type})}>
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