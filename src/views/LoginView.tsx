import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./ViewStyles";
import Header from "../subviews/Header";
import { Account } from "../subviews/AccountView";
import Icon from 'react-native-vector-icons/Feather';
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/MainNavigator";
import globalStyles from "../../Styles";

interface ConnectedAccounts {
    name: string,
    image: any,
    connected: boolean,
}

type LoginViewRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
    route: LoginViewRouteProp;
};

const LoginView: React.FC<Props> = ({ route }) => {
    const { backComponent } = route.params || {};

    
    const [accounts, setAccounts] = useState<Account[]>([]);

    // possible social media accounts to connect to (tik tok, instagram, youtube)
    const mediaAccounts: ConnectedAccounts[] = [
        {
            name: "Tik Tok",
            image: <Icon name="tiktok" size={30} color="#000" />,
            connected: false,
        },
        {
            name: "Instagram",
            image: <Icon name="instagram" size={30} color="#000" />,
            connected: false,
        },
        {
            name: "Youtube",
            image: <Icon name="youtube" size={30} color="#000" />,
            connected: false,
        },
    ]

    return (
        <View style={globalStyles.mainContainer}>
            <View style={styles.rootContainer}>
                <Header title="Connect Accounts" backComponent={backComponent ? backComponent : false}/>
                <View style={{marginTop: 50}}>
                    {mediaAccounts.map((account, index) => {
                        return (
                            <View key={index} style={styles.loginViewContainer}>
                                <View style={styles.loginAccountImageContainer}>
                                    <Image source={account.image} style={styles.loginAccountImage}/>
                                </View>
                                <View>
                                    <Text style={styles.accountName}>{account.name}</Text>
                                    <TouchableOpacity style={styles.accountButton} onPress={() => {
                                        // connect account
                                    }}>

                                        <Text style={styles.accountButtonText}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

export default LoginView;

