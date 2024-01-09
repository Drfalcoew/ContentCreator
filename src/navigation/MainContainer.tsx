

// Views for the main container
import React, { useState } from "react"
import {
    AnimatedTabBarNavigator,
    DotSize,
    TabElementDisplayOptions,
  } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather';
import HomeView from "../views/HomeView"
import ProfileView from "../views/ProfileView"
import AddView from "../views/AddView"
import globalStyles from "../../Styles";
import CommentsView from "../subviews/CommentsView";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Account } from "../subviews/AccountView";

const Stack = createNativeStackNavigator();

const homeViewName = "Home"
const addViewName = "Add"
const profileViewName = "Profile"

const Tabs = AnimatedTabBarNavigator();

const tabViews = [
    {
        name: homeViewName,
        component: HomeView,
        icon: "home",
    },
    {
        name: addViewName,
        component: AddView,
        icon: "plus-circle",
    },
    {
        name: profileViewName,
        component: ProfileView,
        icon: "user",
    }
]

const screens = [
    {
        name: "comments",
        component: CommentsView,
    }
]

const accountData: Account[] = [
    {
        id: 1,
        type: "account",
        name: "Angelina Jolie",
        image: require("../../assets/stock_images/angelina_jolie.jpg"),
        followers: Math.floor(Math.random() * 1000),
        posts: Math.floor(Math.random() * 100),
    },
    {
        id: 2,
        type: "account",
        name: "Scarlett Johansson",
        image: require("../../assets/stock_images/scarlett_johansson.jpg"),
        followers: Math.floor(Math.random() * 1000),
        posts: Math.floor(Math.random() * 100),
    },
    {
        id: 3,
        type: "account",
        name: "Robert Downey Jr.",
        image: require("../../assets/stock_images/robert_downey_jr.jpg"),
        followers: Math.floor(Math.random() * 1000),
        posts: Math.floor(Math.random() * 100),
    },
];


const MainContainer = () => {
    const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

    return (
        <Tabs.Navigator
        appearance={{
            floating: true,
            tabBarBackground: "rgba(43,43,43,0.85)",
            whenActiveShow: TabElementDisplayOptions.BOTH,
            dotSize: DotSize.SMALL,
            activeTabBackgrounds: "#FFFFFF",
            }}
        tabBarOptions={{
        activeTintColor: globalStyles.accentColor.backgroundColor,
        inactiveTintColor: "rgba(27,26,29,1.0)"
        }}
    >
            {tabViews.map((tabView) => {
                return (
                    <Tabs.Screen
                    name={tabView.name}
                    component={() => (
                        <tabView.component
                            navigation={navigator}
                            selectedAccount={selectedAccount}
                            handleAccountChange={setSelectedAccount}
                            accountData={[]}
                        />
                      )}
                      options={{
                        tabBarIcon: ({ focused, color, size }) => (
                          <Icon
                            name={tabView.icon}
                            size={30}
                            color={focused ? "rgba(27,26,29,1.0)" : "#ffffff"}
                            focused={focused}
                          />
                        ),
                        }}
                    />
                )}
            )}
        </Tabs.Navigator>
    )
}

export default MainContainer;