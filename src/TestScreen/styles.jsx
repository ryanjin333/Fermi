import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'contain',
    },
    safeAreaContainer: {
        width: '100%',
        height: '100%',
        marginTop: StatusBar.currentHeight,
    },
    infoContainer: {
        marginTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    continueButton: {
        width: 40,
        height: 20,
    },
    continueImage: {
        width: 40,
        height: 20,
    },
    questionCounter: {
        fontSize: 16,
        color: 'white',
    },
    question: {
        alignSelf: 'flex-start',
        height: 125,
        marginTop: 20,
        fontSize: 26,
        fontWeight: '700',
        color: 'white',
    },
})

export default styles;