import { View, FlatList, Button } from "react-native";
import ModeItem from "./ModeItem";
import modes from "./modes";
import styles from "./styles";


const ModeList = () => {

    return (
        <View style={styles.modeListContainer}>
            <FlatList
                data={modes}
                renderItem={({item}) => <ModeItem mode={item} />}
            />
        </View>
    )
}

export default ModeList;