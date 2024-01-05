import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../subviews/SubViewStyles'
import Header from './Header';

interface Comments {
    name: string,
    comment: string,
    likes: number,
}

interface CommentsViewProps {
    comments?: Comments[],
}

export type RootStackParamList = {
    CommentsView: { comments: Comments[] }
  };

const CommentsView = (props: CommentsViewProps) => {
    const { comments } = props;

    return (
        <SafeAreaView style={{ display: 'flex' }}>
            <ScrollView>
                <Header title="Comments" />
                <View>
                    {comments && comments.map((comment, index) => {
                        return (
                            <View key={index}>
                                <Text style={styles.labelone}>{comment.name}</Text>
                                <Text style={styles.labeltwo}>{comment.comment}</Text>
                                <Text style={styles.labelthree}>{comment.likes} Likes</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CommentsView;