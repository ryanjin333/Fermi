import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
    },
    redoButton: {
        marginTop: 600,
        height: 60,
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
    redoText: {
        fontSize: 19,
        fontWeight: '700',
        color: '#EA8D8D',
    },  

})

export default styles;