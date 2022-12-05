import { View, Text } from "react-native";
import styles from "./styles";

const TestScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>This is the {route.params.type} page</Text>
        </View>
    )
}

export default TestScreen;