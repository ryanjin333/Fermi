import { 
    Image,
    Text,
    TouchableOpacity
} from "react-native";
import * as Linking from 'expo-linking';
import styles from "./styles";

const ListItem = ({item}) => {

    return (
        <TouchableOpacity onPress={() => Linking.openURL(item.link)} 
            style={styles.item}>
            <Text style={styles.title}>{item.cellName}</Text>
            <Image
                style={styles.chevron}
                source={require('../../../assets/chevron.png')}
            />
        </TouchableOpacity>
    )
}

export default ListItem;