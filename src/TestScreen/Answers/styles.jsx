import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%',
        height: '100%',
    },
    answersContainer: {
        width: '100%',
        marginTop: Dimensions.get('window').height <= 736 ? 0 : 50,
        alignItems: 'center',
    },
    multipleChoiceContainer: {
        width: '100%',
        alignItems: 'center',
    },  
    result: {
        color: 'white',
        marginTop: Dimensions.get('window').height <= 736 ? 20 : 30,
    },
})

export default styles;