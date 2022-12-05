import { ImageBackground, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Title from "./Title";
import ModeList from "./ModeList";


const HomeScreen = ({ navigation }) => {

    return (
        <ImageBackground source={require('../../assets/HomeBackground.png')} style={styles.backgroundContainer}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <TouchableOpacity style={styles.settingsIcon} onPress={() => navigation.navigate("Settings") }>
                    <Image source={require('../../assets/SettingsIcon.png')} style={styles.settingsIconImage}/>
                </TouchableOpacity>
                <Title />
                <ModeList />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default HomeScreen;