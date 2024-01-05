import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../subviews/Header';
import styles from './ViewStyles';

const ProfileView = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainScrollView}>
                <Header title={'Profile'} rightComponents={[]}/>
            </View>
        </SafeAreaView>
    );
}

export default ProfileView;