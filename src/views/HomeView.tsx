import React, { useState } from 'react';
import styles from './ViewStyles';
import CellViews from '../subviews/CellViews';
import { SectionList } from 'react-native';
import Switch from '../subviews/Switch';
import SelectedPost from '../subviews/SelectedPost';
import Header from '../subviews/Header';
import { Account } from '../subviews/AccountView';

interface postData {
    id: number,
    type: string,
    name: string,
    image: any,
    likes: number,
    comments: any
}

const postData: postData[] = [
    {
        id: 1,
        type: "post",
        name: "Flower Post",
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
        name: "Green Hills",
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
        name: "Forest",
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
        name: "At the beach",
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
        name: "Pink flowers post",
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
        name: "Fall road",
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


const HomeView = (props: {accountData: Account[]}) => {

    const { accountData } = props;

    // Default is posts
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedPost, setSelectedPost] = useState<any>(postData[0]);
    const [viewData, setViewData] = useState<any>(postData);

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
        <SectionList
            contentContainerStyle={styles.mainScrollView}
            stickySectionHeadersEnabled={false}
            sections={listComponents}
            renderItem={({ item, section }) => {
            return section.component;
            }}
            renderSectionHeader={({ section: { title } }) => {
            return title === 'Posts' ? (
                <Header title={selectedIndex === 0 ? 'Posts' : 'Accounts'} rightComponents={[]}/>
            ) : null;
            }}
        />
      );
    };

export default HomeView;