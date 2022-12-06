import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    questionCounter: {
        alignSelf: 'flex-start',
        marginTop: 235,
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