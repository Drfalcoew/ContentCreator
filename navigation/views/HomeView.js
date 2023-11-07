import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './ViewStyles';
import CellViews from '../subviews/CellViews';
import { SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Switch from '../subviews/Switch';

import SelectedPost from '../subviews/SelectedPost';

const postData = [
    {
        id: 1,
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

const accountData = [
    {
        id: 1,
        title: "Angelina Jolie",
        image: require("../../assets/stock_images/angelina_jolie.jpg"),
        followers: Math.floor(Math.random() * 1000),
        posts: Math.floor(Math.random() * 100),
    },
    {
        id: 2,
        title: "Scarlett Johansson",
        image: require("../../assets/stock_images/scarlett_johansson.jpg"),
        followers: Math.floor(Math.random() * 1000),
        posts: Math.floor(Math.random() * 100),
    },
    {
        id: 3,
        title: "Robert Downey Jr.",
        image: require("../../assets/stock_images/robert_downey_jr.jpg"),
        followers: Math.floor(Math.random() * 1000),
        posts: Math.floor(Math.random() * 100),
    },
];

const HomeView = ({navigation}) => {

    // Default is posts
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedPost, setSelectedPost] = useState(postData[0]);
    const [viewData, setViewData] = useState(postData);

    console.log("Selected index: ", selectedIndex);

    // This is the function that will be called when the switch is toggled
    const onChangeHandler = () => {

        if (selectedIndex === 0) {
            setViewData(accountData);
            setSelectedPost(accountData[0]);
        } else {
            setViewData(postData);
            setSelectedPost(postData[0]);
        }
    }

    const listComponents = [
        { title: 'Posts', data: [1], component: (<CellViews viewData={viewData} setData={setSelectedPost} />) },
        { title: 'Switch', data: [1], component: (<Switch selectedIndex={selectedIndex}
            onSegmentChange={(index) => {
                setSelectedIndex(index);
                onChangeHandler();
            }}
        /> )},
        { title: 'SelectedPost', data: [1], component: (<SelectedPost post={selectedPost}/>)}
    ];

    
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={styles.mainScrollView}
            stickySectionHeadersEnabled={false}
            sections={listComponents}
            renderItem={({ item, section }) => {
              return section.component;
            }}
            renderSectionHeader={({ section: { title } }) => {
              return title === 'Posts' ? (
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderText}>
                    {selectedIndex === 0 ? 'Posts' : 'Accounts'}
                  </Text>
                </View>
              ) : null;
            }}
          />
        </SafeAreaView>
      );
    };

export default HomeView;