import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    answerButton: {
        marginTop: 20,
        height: 70,
        width: '100%',
        borderRadius: 20,   
        shadowColor: '#00000050',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 1,
        shadowRadius: 10,  
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    answerText: {
        fontSize: 21,
        fontWeight: '700',
        color: '#EA8D8D',
    },
})

export default styles;