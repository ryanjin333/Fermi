import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    answersContainer: {
        position: 'absolute',
        width: '100%',
        marginTop: 440,
        alignItems: 'center',
    },
    multipleChoiceContainer: {
        width: '100%',
        alignItems: 'center',
    },  
    result: {
        color: 'white',
        marginTop: 30,
        
    },
    fillInContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fillInText: {
        color: 'white',
        fontSize: 21,
        fontWeight: '600',
    },
    input: {
        width: 50,
        height: 35,
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        backgroundColor: 'white',
    }
})

export default styles;