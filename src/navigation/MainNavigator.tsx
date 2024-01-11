import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import CommentsView, { CommentsViewProps } from "../subviews/CommentsView";
import LoginView from "../views/LoginView";


const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Comments: { comments: CommentsViewProps } | undefined;
  Login: { backComponent?: boolean } | undefined;
};

const MainNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={BottomTabNavigation} options={{headerShown: false}}/>
        <Stack.Screen name="Comments" component={CommentsView} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginView} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;