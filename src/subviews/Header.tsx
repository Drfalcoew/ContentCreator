
import React from "react";
import styles from "../views/ViewStyles";
import { View, Text, TouchableOpacity } from 'react-native';

interface RightComponents {
    title: string;
    action: () => void;
}

interface HeaderProps {
    title: string;
    rightComponents?: RightComponents[];
}

const Header = (props: HeaderProps) => {
    const { title, rightComponents } = props;

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.headerRightContainer}>
                {rightComponents && rightComponents.map((component, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={component.action}>
                            <View key={index} style={{marginRight: 10}}>
                                <Text style={[styles.headerText, {fontWeight: '400',}]} onPress={component.action}>{component.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default Header;