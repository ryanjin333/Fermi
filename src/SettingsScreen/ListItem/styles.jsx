import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 36,
        paddingRight: 25,
        height: 44,
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
    },
    chevron: {
        height: 30,
        width: 30.
    }
});

export default styles;