import { View, TouchableOpacity, Image, Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetAllQ } from "../TestScreenSlice";
import styles from "./styles";

const Nav = () => {

    //Navigation
    const navigation = useNavigation();

    //Redux
    const dispatch = useDispatch();

    const exitTapped = () => {
        navigation.navigate("Home");
        dispatch(resetAllQ());
    }

    return (
        <View style={styles.navContainer}>
            <TouchableOpacity style={styles.exitContainer} onPress={exitTapped}>
                <Image style={styles.exitImage} source={require("../../../assets/Exit.png")}/>
            </TouchableOpacity>
            <CountdownCircleTimer
                isPlaying={true}
                duration={120}
                colors={"#ffffff"}
                colorsTime={10}
                onComplete={() => ({ shouldRepeat: true, delay: 2 })}
                size={80}
                strokeWidth={8}
                trailColor={"#ffffff30"}
            >
            {({ remainingTime, color }) => (
                <Text style={{ color, fontSize: 18, fontWeight: '600' }}>
                    {remainingTime}
                </Text>
            )}
            </CountdownCircleTimer>
            <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate("Info")}>
                <Image style={styles.infoImage} source={require("../../../assets/Info.png")}/>
            </TouchableOpacity>
        </View>
    )
}

export default Nav;