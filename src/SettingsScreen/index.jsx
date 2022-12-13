import { SectionList, View, SafeAreaView } from "react-native";
import styles from "./styles";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";

const Data = [
    {
        title: 'General',
        data: [
            {
                id: '1',
                cellName: 'Privacy Policy',
                link: 'https://daytrackernwss.github.io/index.html',
            },
            {
                id: '2',
                cellName: 'Terms and Conditions',
                link: 'https://daytrackernwss.github.io/termsAndConditions.html',
            },
            {
                id: '3',
                cellName: 'Info',
                link: 'https://scioly.org/wiki/index.php/Fermi_Questions',
            },
        ],
    }
];


const SettingsScreen = () => {

    const renderItem = ({ item }) => {
        return(
            <ListItem item={item} />
        )
    }

    const renderHeader = ({ section: { title } }) => {
        return(
            <ListHeader title={title} />
        )
    }

    return(
        <View style={{backgroundColor: 'white'}}>
            <SafeAreaView style={styles.listContainer}>
                <SectionList 
                    sections={Data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    renderSectionHeader={renderHeader}                   
                />
            </SafeAreaView>
        </View>
    )
};

export default SettingsScreen;