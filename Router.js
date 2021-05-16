import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import InsertEmail from './src/screens/InsertEmail';
import AccountVer from './src/screens/AccountVer';
import CreateNewPass from './src/screens/CreateNewPass';
import PassChanged from './src/screens/PassChanged';

import DashStuAllSchedule from './src/screens/DashStuAllSchedule';

import ActStuNewClass from './src/screens/ActStuNewClass';
import ActStu from './src/screens/ActStu';
import ActStuClassDetail from './src/screens/ActStuClassDetail';

import Chat from './src/screens/Chat';




const Router = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Register" component={Register} />
        <Screen name="InsertEmail" component={InsertEmail} />
        <Screen name="AccountVer" component={AccountVer} />
        <Screen name="CreateNewPass" component={CreateNewPass} />
        <Screen name="PassChanged" component={PassChanged} />
        <Screen name="DashStuAllSchedule" component={DashStuAllSchedule} />
        <Screen name="ActStu" component={ActStu} />
        <Screen name="ActStuClassDetail" component={ActStuClassDetail} />
        <Screen name="ActStuNewClass" component={ActStuNewClass} />
        <Screen name="Chat" component={Chat} />
      </Navigator>
    </NavigationContainer>
  );
};



export default Router;