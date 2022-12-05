import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    modeItemContainer: {
        height: 160,
        marginTop: 48,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    modeItemButton: {
        width: 350,
        height: 160,
        borderRadius: 25,   
        shadowColor: '#00000050',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 1,
        shadowRadius: 13,  
        elevation: 5,
    },  
    modeItemBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 160,
        borderRadius: 25,
        padding: 25, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 6,
        color: 'white',
    },
    subtitle: {
        fontSize: 14,
        color: 'white',
    },
    startButton: {
        
        width: 36,
        height: 41,
    }
})

export default styles;