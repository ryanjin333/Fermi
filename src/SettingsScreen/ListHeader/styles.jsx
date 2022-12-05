import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '700',
    },
    versionHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: 'gray',
    },
});

export default styles;