import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../subviews/SubViewStyles'
import viewStyles from '../views/ViewStyles';
import Header from './Header';

interface Comments {
    name: string,
    comment: string,
    likes: number,
}

export interface CommentsViewProps {
    comments?: Comments[],
}


const CommentsView = (props: CommentsViewProps) => {
    const { comments } = props;

    return (
        <View style={viewStyles.mainView}>
            <ScrollView style={viewStyles.mainScrollView}>
                <Header title="Comments" backComponent={true}/>
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
        </View>
    );
};

export default CommentsView;