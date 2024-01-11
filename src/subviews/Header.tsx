
import React from "react";
import styles from "../views/ViewStyles";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

interface RightComponents {
    title: string;
    action: () => void;
}

interface HeaderProps {
    title: string;
    rightComponents?: RightComponents[];
    backComponent?: boolean;
}

const Header = (props: HeaderProps) => {
    const { title, rightComponents } = props;
    const navigation = useNavigation();

    return (
        <View style={[styles.headerContainer, { alignItems: 'center' }]}>
            {props.backComponent &&
                <TouchableOpacity style={styles.headerLeftContainer} onPress={() => {
                    navigation.goBack();
                }}>     
                    <Icon name="arrow-left-circle" size={24} color="#fff" /> 
                </TouchableOpacity>
            }
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.headerRightContainer}>
                {rightComponents && rightComponents.map((component, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={component.action}>
                            <View key={index} style={{marginRight: 10}}>
                                <Text style={[styles.headerText, {fontWeight: '400', textAlign: 'right', marginRight: 0 }]} onPress={component.action}>{component.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default Header;