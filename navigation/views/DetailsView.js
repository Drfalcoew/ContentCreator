import * as React from 'react';
import styles from "./ViewStyles"
import { View, Text } from 'react-native';

const DetailsView = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate("Details")}
            >Details View</Text>
        </View>
    );
}

export default DetailsView;