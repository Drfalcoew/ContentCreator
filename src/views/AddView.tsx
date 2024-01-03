import * as React from 'react';
import { useState, ChangeEvent, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CellViews from '../subviews/CellViews';
import { ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import viewStyles from './ViewStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../subviews/SubViewStyles";
import Icon from 'react-native-vector-icons/Feather';


interface postData {
    id: number,
    type: string,
    title: string,
    image: any,
    likes: number,
    comments: any
}

interface AddPostData {
    title: string,
    description: string,
    image: any,
}


const postData: postData[] = [
    {
        id: 1,
        type: "post",
        title: "Flower Post",
        image: require("../../assets/stock_images/image_0.jpg"),
        likes: Math.floor(Math.random() * 100),
        comments: [
            {
                name: "John",
                comment: "Beautiful flowers!",
            },
            {
                name: "Jane",
                comment: "I love this post!",
            },
        ],
    },
    {
        id: 2,
        type: "post",
        title: "Green Hills",
        image: require("../../assets/stock_images/image_1.jpg"),
        likes: Math.floor(Math.random() * 100),
        comments: [
            {
                name: "Bob",
                comment: "Amazing view!",
            },
        ],
    },
    {
        id: 3,
        type: "post",
        title: "Forest",
        image: require("../../assets/stock_images/image_2.jpg"),
        likes: Math.floor(Math.random() * 100),
        comments: [
            {
                name: "Alice",
                comment: "I want to go there!",
            },
            {
                name: "Charlie",
                comment: "This is so peaceful.",
            },
        ],
    },
    {
        id: 4,
        type: "post",
        title: "At the beach",
        image: require("../../assets/stock_images/image_3.jpg"),
        likes: Math.floor(Math.random() * 100),
        comments: [
            {
                name: "Eve",
                comment: "I miss the beach!",
            },
        ],
    },
    {
        id: 5,
        type: "post",
        title: "Pink flowers post",
        image: require("../../assets/stock_images/image_4.jpg"),
        likes: Math.floor(Math.random() * 100),
        comments: [
            {
                name: "David",
                comment: "So pretty!",
            },
            {
                name: "Grace",
                comment: "I love the colors!",
            },
        ],
    },
    {
        id: 6,
        type: "post",
        title: "Fall road",
        image: require("../../assets/stock_images/image_5.jpg"),
        likes: Math.floor(Math.random() * 100),
        comments: [
            {
                name: "Oliver",
                comment: "I want to take a walk there!",
            },
        ],
    },
];

const AddView = ({navigation}) => {

    const [newPosts, setNewPosts] = useState<postData[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const createPost = (post: postData) => {
        setNewPosts([post, ...newPosts]);
    }

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
          let imageUrl;

          reader.onloadend = () => {
            imageUrl = reader.result as string;
            setSelectedImage(imageUrl);
          };
          reader.readAsDataURL(file);

          createPost({
            id: Math.floor(Math.random() * 100),
            type: "post",
            title: "New Post",
            image: imageUrl,
            likes: 0,
            comments: []
            });
        }
      };
    
        

    return (
            <View style={styles.rootContainer}>
                <View style={viewStyles.sectionHeaderContainer}>
                    <Text style={viewStyles.sectionHeaderText}>
                        Add Posts
                    </Text>
                </View>
                <View style={styles.addPostContainer}>
                    <TouchableOpacity style={styles.addPostView} >
                    <input
                                style={{ width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: 10, zIndex: 1, position: 'absolute', top: 0, left: 0, opacity: 0, cursor: 'pointer'}}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        <View>
                            <Icon name={'plus-circle'} size={30} color={"rgba(255, 255, 255, 0.7)"} />
                        </View>
                    </TouchableOpacity>
                    <AddPostCellViews viewData={postData} setData={setNewPosts} />
                    {/* Add title and description text fields here */}
                    <View>
                        
                    </View>
                </View>
            </View>
    );
}

export default AddView;



const AddPostCellViewChild = ({ post, onPress, onDeletePress }) => (
    <TouchableOpacity onPress={onPress}>
        <ImageBackground source={post.image} style={styles.postView}>
            <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDeletePress(post.id)}
        >
            <Icon name={'x-circle'} size={20} color={'white'} />
        </TouchableOpacity>
        </ImageBackground>
    </TouchableOpacity>
  );
  
  const AddPostCellViews = ({ viewData, setData }) => {

    const handleDeletePress = (postId) => {
        const updatedData = viewData.filter((post) => post.id !== postId);
        setData(updatedData);
      };

    return (
      <View style={styles.postContainer}>
        <ScrollView horizontal={true}>
          {viewData.map((post) => (
            <AddPostCellViewChild
              key={post.id}
              post={post}
              onPress={() => setData(post)}
              onDeletePress={handleDeletePress}
            />
          ))}
        </ScrollView>
      </View>
    );
  };