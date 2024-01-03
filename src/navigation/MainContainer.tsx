

// Views for the main container
import React from "react"
import {
    AnimatedTabBarNavigator,
    DotSize, // optional
    TabElementDisplayOptions, // optional
    TabButtonLayout, // optional
    IAppearanceOptions // optional
  } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather';
import HomeView from "../views/HomeView"
import ProfileView from "../views/ProfileView"
import AddView from "../views/AddView"
import globalStyles from "../../Styles";

// ViewNames for the main container
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


const MainContainer = () => {
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
                    component={tabView.component}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                        <Icon name={tabView.icon} size={30} color={focused ? "rgba(27,26,29,1.0)" : "#ffffff"} focused={focused} />
                        ),
                    }}
                    />
                
                )}
            )}
        </Tabs.Navigator>
    )
}

export default MainContainer;