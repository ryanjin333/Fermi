import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Nav = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.navContainer}>
            <TouchableOpacity style={styles.exitContainer} onPress={() => navigation.navigate("Home")}>
                <Image style={styles.exitImage} source={require("../../../assets/Exit.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate("Info")}>
                <Image style={styles.infoImage} source={require("../../../assets/Info.png")}/>
            </TouchableOpacity>
        </View>
    )
}

export default Nav;