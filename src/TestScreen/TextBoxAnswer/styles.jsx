import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tenPowerMessage: {
        color: 'white',
        fontSize: 26,
        fontWeight: '700',
        alignSelf: 'flex-start',
    },
    inputContainer: {
        marginTop: 50,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    input: {
        width: '78%',
        height: 40,
        borderRadius: 30,
        paddingHorizontal: 15,
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        backgroundColor: '#c4c0c060',
    },
    checkButton: {
        width: 60,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 10, 
        backgroundColor: "#1e98e8", 
        elevation: 2,
    },
    checkImage: {
        width: 30,
        height: 30,
    },
    resultMessage: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },  
});

export default styles;