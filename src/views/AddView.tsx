import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import styles from "../subviews/SubViewStyles";
import Icon from 'react-native-vector-icons/Feather';
import Header from '../subviews/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import viewStyles from './ViewStyles';
import AccountView from '../subviews/AccountView';
import { Account } from '../subviews/AccountView';


interface NewPostData {
    id: number;
    type: string;
    title: string;
    description: string;
    image: any;
    tags: string[];
  }

interface AddPostData {
    title: string,
    description: string,
    image: any,
}


const postData: NewPostData[] = [
    {
      id: 0,
      type: "post",
      title: "Tuscany Trip",
      description: "Trip to Tuscany, Italy",
      image: require("../../assets/stock_images/image_1.jpg"),
      tags: ["#tuscany", "#italy", "#euro"],
    },
    {
      id: 1,
      type: "post",
      title: "Wood Forest",
      description: "Trip to Wood Forest, Texas",
      image: require("../../assets/stock_images/image_2.jpg"),
      tags: ["#camping", "#tents", "#fog"],
    },
    {
      id: 2,
      type: "post",
      title: "Jessica",
      description: "I am in love with this place!",
      image: require("../../assets/stock_images/image_3.jpg"),
      tags: ["#blueSkies", "#beautiful", "#helloworld"],
    },     
];

const AddView = (props: {navigation: any, selectedAccount: Account | null, handleAccountChange}) => {

    const { selectedAccount, handleAccountChange } = props;
    const [newPosts, setNewPosts] = useState<NewPostData[]>( postData );
    const [selectedId, setSelectedId] = useState<number | null>(0);
    
    const handleTitleChange = (title: string) => {
        if (selectedId !== null) {
            const updatedPosts = newPosts.map((post) =>
            post.id === selectedId ? { ...post, title } : post
            );
            setNewPosts(updatedPosts);
        }
    };
    
    const handleDescriptionChange = (description: string) => {
        if (selectedId !== null) {
            const updatedPosts = newPosts.map((post) =>
            post.id === selectedId ? { ...post, description } : post
            );
            setNewPosts(updatedPosts);
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
      
        if (file) {
          const reader = new FileReader();
          let imageUrl;
      
          reader.onloadend = () => {
            imageUrl = reader.result as string;
      
            setNewPosts((prevPosts) => [
              {
                id: prevPosts.length,
                type: "post",
                title: "",
                image: imageUrl,
                description: "",
                tags: [],
              },
              ...prevPosts,
            ]);
          };
      
          reader.readAsDataURL(file);
        }
      };

    const TagsComponent = (props: {tags: string[]}) => { // add a next where you can type one more tag

        const { tags } = props;
        const [newTag, setNewTag] = useState('');
        
        const onDeletePress = (index) => {
            const updatedTags = tags.filter((tag, i) => i !== index);
            const updatedPosts = newPosts.map((post) =>
            post.id === selectedId ? { ...post, tags: updatedTags } : post
            );
            setNewPosts(updatedPosts);
        }

        const onAddTagPress = () => {

            let _newTag = newTag.trim();

            if (_newTag.trim() !== '') {
              
            if (_newTag.trim().charAt(0) !== '#') {
                setNewTag('#' + _newTag.trim());
            }

              setNewPosts((prevPosts) =>
                prevPosts.map((post) =>
                  post.id === selectedId
                    ? { ...post, tags: [...post.tags, _newTag] }
                    : post
                )
              );
              setNewTag('');
            }
          };

        return (
            <View style={[styles.tagsContainer, {display: selectedId == null ? 'none' : 'flex' }]}>
                {tags.map((tag, index) => (
                    <View style={styles.tagsBubble}>
                        <TouchableOpacity
                                style={styles.tagsDelete}
                                onPress={() => onDeletePress(index)}
                            >
                            <Icon name={'x-circle'} size={20} color={'rgba(200,200,200,1.0)'} />
                        </TouchableOpacity>
                        <Text style={styles.tagText}>
                            {tag}
                        </Text>
                    </View>
                ))
            }
            <View style={styles.addTagBubble}>
                <TextInput
                    style={{color: 'rgba(200,200,200,1.0)', width: '100%', height: '100%' }}
                    placeholder="#AddTag"
                    placeholderTextColor={'rgba(200,200,200,1.0)'}
                    value={newTag}
                    onChangeText={(text) => setNewTag(text)}
                    onBlur={onAddTagPress}
                    />
                </View>
            </View>
        )
    }

    const handleAddPosts = () => {
        // add posts to database
        // navigate to feed view
        console.log("Adding posts to database");
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={[viewStyles.mainScrollView, {overflow: 'visible'}]}>
                    <Header title={"Schedule New Post"} rightComponents={[{ title: "Upload", action: handleAddPosts }]} />
                    <AccountView key={0} selectedAccount={selectedAccount} accounts={[]} onAccountChange={handleAccountChange}/> 
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
                        <AddPostCellViews viewData={newPosts} setId={setSelectedId} setData={setNewPosts} />
                    </View>
                    <View>
                        <TextInput
                                style={[styles.inputField, { display: selectedId == null ? 'none' : 'flex' }]}
                                placeholder="Title"
                                value={selectedId !== null ? newPosts.filter((post) => post.id === selectedId)[0].title : ''}
                                onChangeText={(text) => handleTitleChange(text)}
                            />
                            <TextInput
                                style={[styles.inputField, { height: 100, display: selectedId == null ? 'none' : 'flex' }]}
                                placeholder="Description"
                                value={selectedId !== null ? newPosts.filter((post) => post.id === selectedId)[0].description : ''}
                                onChangeText={(text) => handleDescriptionChange(text)}
                            />
                        <TagsComponent
                            tags={selectedId !== null ? newPosts.filter((post) => post.id === selectedId)[0].tags : [""]}
                        />
                        </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AddView;


interface AddPostCellViewChildProps {
    post: NewPostData;
    onPress: () => void;
    onDeletePress: (postId: number) => void;
}

interface AddPostCellViewsProps {
    viewData: NewPostData[];
    setId: (id: number | null) => void;
    setData: (data: NewPostData[]) => void;
}

const AddPostCellViewChild = (props: AddPostCellViewChildProps) => {

    const { post, onPress, onDeletePress } = props;

    return (

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
};

const AddPostCellViews = (props: AddPostCellViewsProps) => {

    const { viewData, setId, setData } = props;

    const handleDeletePress = (postId) => {
        console.log("Deleting post with id: " + postId);
        const updatedData = viewData.filter((post) => post.id !== postId);
        setData(updatedData);

        setId(null);
    }

    return (
      <View style={styles.postContainer}>
        <ScrollView horizontal={true}>
          {viewData.map((post) => (
            <AddPostCellViewChild
                key={post.id}
                post={post}
                onPress={() => setId(post.id)}
                onDeletePress={handleDeletePress}
                />
          ))}
        </ScrollView>
      </View>
    );
  };