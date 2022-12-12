import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    infoContainer: {
        marginTop: 235,
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
        marginTop: 20,
        fontSize: 26,
        fontWeight: '700',
        color: 'white',
    },
})

export default styles;