import * as React from 'react';
import { View, Text } from 'react-native';

const ProfileView = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate("Profile")}
            >Profile View</Text>
        </View>
    );
}

export default ProfileView;