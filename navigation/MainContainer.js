

// Views for the main container
import HomeView from "./views/HomeView"
import ProfileView from "./views/ProfileView"
import Header from "./subviews/Header"
import { View, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyles from "./Styles"

// ViewNames for the main container
const homeViewName = "Home"
const profileViewName = "Profile"

const Tab = createBottomTabNavigator();


const MainContainer = () => {
    return (
        <NavigationContainer theme={ {colors: {background: 'rgba(27,26,29,1.0)'}} }>
            <Tab.Navigator
            
            initialRouteName={homeViewName}
            screenOptions={({ route }) => ({
                tabBarStyle: { borderCurve: 20, borderTopWidth: 1,
                    borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute', bottom: 0, left: 0,
                    right: 0, height: 80, shadowColor: 'rgba(0,0,0,0.2)', shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.8, shadowRadius: 20, elevation: 25, borderTopColor: 'rgba(0,0,0,0.2)', borderTopWidth: 1, backgroundColor: 'rgba(43,43,43,0.95)' },
                tabBarIcon: ({ focused, color, size }) => {
                    let source;
                    let rn = route.name;
                    if (rn === homeViewName) {
                        source = require('../assets/house.png')
                    } else if (rn === profileViewName) {
                        source = require('../assets/person.png')
                    }

                    color = focused ? 'rgba(255,255,255,1.0)' : 'rgba(255,255,255,0.5)';
                    const circleStyle = focused ? globalStyles.selectedTabCircle : globalStyles.unselectedTabCircle;

                    return (
                        <View style={globalStyles.tabIconContainer}>
                            <View style={circleStyle}>
                                <Image source={source} style={{ width: 22.5, height: 22.5 }} />
                            </View>
                        </View>
                    );
                },
                header: ( { route} ) => (
                    <Header title={route.name} />
                ),
                tabBarShowLabel: false,
            })}
            >
                <Tab.Screen name={homeViewName} component={HomeView} />
                <Tab.Screen name={profileViewName} component={ProfileView} />

            </Tab.Navigator>
            <View style={globalStyles.floatingIcon}>
                <Ionicons name="add-circle" size={65} color="#3F8CFB" />
            </View>
        </NavigationContainer>
    )
}

export default MainContainer;