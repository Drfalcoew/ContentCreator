import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import styles from "./SubViewStyles"
import GlowingImage from '../helpers/GlowingImage';

const SelectedPost = ({ post }) => {

    console.log(post);

    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments] = useState(post.comments || []);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        setComments([...comments, { name: 'username', comment: 'comment text' }]);
    };

    useEffect(() => {
        setLikes(post.likes);
        setComments(post.comments || []);
    }, [post]);

    // Do not render comments if 

    return (
        <View key={post.id} style={styles.selectedPostContainer}>
            <View style={styles.selectedPostHeaderContainer}>
                <View style={styles.selectedPostHeader}>
                    <Image source={{ uri: post.image }} style={styles.selectedPostHeaderCircle} />
                    <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                        <Text style={styles.selectedPostHeaderTitle}>{post.title}</Text>
                        <Text style={styles.labelfour}>@username</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={{}} style={styles.selectedPostHeaderCircle} />
                </TouchableOpacity>
            </View>
            <GlowingImage source={post.image} style={styles.selectedPostImage} />
            {post.type === "post" ? (
                <>
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
                <>
                {comments.map((comment, index) => (
                    <View key={index} style={styles.selectedPostBottomView}>
                        <Text style={styles.selectedPostCommenter}>{comment.name}</Text>
                        <Text style={styles.selectedPostComments}>{comment.comment}</Text>
                    </View>
                ))}
                </>
                </>
            ) : (
                // If the post is an account, only render the post.posts and post.followers
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <Text style={styles.labelthree}>{post.posts}</Text>
                    <Text style={[styles.labelfour, {marginRight: 10 }]}>Posts</Text>
                    <Text style={styles.labelthree}>{post.followers}</Text>
                    <Text style={styles.labelfour}>Followers</Text>
                </View>

                )}
        </View>
    );
};

export default SelectedPost;
