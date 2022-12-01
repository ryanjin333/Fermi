import { ImageBackground, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Title from "./Title";


const HomeScreen = () => {


    return (
        <ImageBackground source={require('../../assets/HomeBackground.png')} style={styles.backgroundContainer}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <TouchableOpacity style={styles.settingsIcon} onPress={() => {console.warn("Tapped")}}>
                    <Image source={require('../../assets/SettingsIcon.png')} style={styles.settingsIconImage}/>
                </TouchableOpacity>
                <Title />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default HomeScreen;