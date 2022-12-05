import { View, Text } from 'react-native';
import styles from "./styles";

const Title = () => {

return (
    <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Test yourself</Text>
        <Text style={styles.subTitle}>Pick a mode to begin!</Text>
    </View>
)
}

export default Title;