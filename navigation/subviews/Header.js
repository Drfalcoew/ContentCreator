
import styles from "./SubViewStyles"
import { View, Text } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

export default Header;