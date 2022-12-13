import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    safeAreaContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        marginTop: StatusBar.currentHeight,
    },
    settingsIcon: {
        marginTop: 13,
        marginRight: 20,
        alignItems: 'flex-end',
    },
    settingsIconImage: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
    },

})

export default styles;