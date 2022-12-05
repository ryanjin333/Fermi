import { View, Text } from "react-native";
import styles from "./styles";

const ListHeader = ({ title }) => {
    return(
        <View style={styles.header}>
            <Text style={styles.sectionHeader}>{title}</Text>
            <Text style={styles.versionHeader}>v1.0</Text>
        </View>
    )
}

export default ListHeader;