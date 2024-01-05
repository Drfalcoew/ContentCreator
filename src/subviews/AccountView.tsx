// This component is the account view to be displayed when a user is scheduling a new post.
// It will be just under the Header component and will display the user's profile picture and
// username. It will also come in in an animation from the left of the screen.

import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './SubViewStyles';

interface AccountViewProps {
    accounts: any, // TODO: Change this to the correct type when we have the data
    image: any,
    username: string,
}

const AccountView = (props: AccountViewProps) => {
    const { image, username, accounts } = props;

    const switchAccounts = () => {
        // open modal with accounts list to switch to

    }

    return (
        <View style={styles.accountViewContainer}>
            <Image source={image} style={styles.accountViewImage} />
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={styles.accountViewUsername}>{username}</Text>
                <TouchableOpacity onPress={switchAccounts}>
                    <Text style={styles.accountViewButton}>Switch Accounts</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
};

export default AccountView;
