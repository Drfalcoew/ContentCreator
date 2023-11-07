import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./SubViewStyles"
import GlowingImage from '../helpers/GlowingImage';

const SelectedPost = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments] = useState(post.comments);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        setComments([...comments, { user: 'username', text: 'comment text' }]);
    };

    return (
        <View style={styles.selectedPostContainer}>
            <View style={styles.selectedPostHeaderContainer}>
                <View style={styles.selectedPostHeader}>
                    <Image source={{ uri: post.image }} style={styles.selectedPostHeaderCircle} />
                    <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                        <Text style={styles.selectedPostHeaderTitle}>{post.title}</Text>
                        <Text style={styles.labelfour}>@username</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image style={styles.selectedPostHeaderCircle} />
                </TouchableOpacity>
            </View>
            <GlowingImage source={post.image} style={styles.selectedPostImage} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <TouchableOpacity onPress={handleLike}  style={{ paddingRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.labelthree}>{likes}</Text>
                    <Text style={styles.labelfour}>Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleComment} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.labelthree}>{comments.length}</Text>
                    <Text style={styles.labelfour}>Comments</Text>
                </TouchableOpacity>
            </View>
            {comments.map((comment, index) => (
                <View key={index} style={styles.selectedPostBottomView}>
                    <Text style={styles.selectedPostCommenter}>{comment.user}</Text>
                    <Text style={styles.selectedPostComments}>{comment.text}</Text>
                </View>
            ))}
        </View>
    );
};

export default SelectedPost;
