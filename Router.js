import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import InsertEmail from './src/screens/InsertEmail';
import AccountVer from './src/screens/AccountVer';
import CreateNewPass from './src/screens/CreateNewPass';
import PassChanged from './src/screens/PassChanged';

import DashStuAllSchedule from './src/screens/DashStuAllSchedule';
import DashFas from './src/screens/DashFas';

import ActStuNewClass from './src/screens/ActStuNewClass';
import ActStuMyClass from './src/screens/ActStu';
import ActStuClassDetail from './src/screens/ActStuClassDetail';
import ActFasClassDetail from './src/screens/ActFasClassDetail';
import ActFasMember from './src/screens/ActFasMember';

import ActivityFas from './src/screens/ActivityFas';

import Chat from './src/screens/Chat';

const Stack = createStackNavigator();

// const Router = () => {
class Router extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* Login */}
          <Stack.Screen name="Login" component={Login} />
          {/* Register */}
          <Stack.Screen name="Register" component={Register} />
          {/* Forgot Password */}
          <Stack.Screen name="InsertEmail" component={InsertEmail} />
          <Stack.Screen name="AccountVer" component={AccountVer} />
          <Stack.Screen name="CreateNewPass" component={CreateNewPass} />
          <Stack.Screen name="PassChanged" component={PassChanged} />
          {/* Dashboard */}
          <Stack.Screen
            name="DashStuAllSchedule"
            component={DashStuAllSchedule}
          />
          <Stack.Screen name="DashFas" component={DashFas} />
          {/* Profile */}
          <Stack.Screen name="Profile" component={Profile} />
          {/* Activity */}
          <Stack.Screen name="ActStuNewClass" component={ActStuNewClass} />
          <Stack.Screen name="ActStuMyClass" component={ActStuMyClass} />
          <Stack.Screen
            name="ActStuClassDetail"
            component={ActStuClassDetail}
          />
          <Stack.Screen
            name="ActFasClassDetail"
            component={ActFasClassDetail}
          />
          <Stack.Screen
            name="ActFasMember"
            component={ActFasMember}
          />

          <Stack.Screen name="ActivityFas" component={ActivityFas} />
          {/* Chat */}
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>

        {/* <Navigator name="Login" component={Login} />
      <Navigator name="Home" component={Home} />
      <Navigator name="Profile" component={Profile} />
      <Navigator name="Register" component={Register} />
      <Navigator name="InsertEmail" component={InsertEmail} />
      <Navigator name="AccountVer" component={AccountVer} />
      <Navigator name="CreateNewPass" component={CreateNewPass} />
      <Navigator name="PassChanged" component={PassChanged} />
      <Navigator name="DashStuAllSchedule" component={DashStuAllSchedule} />
      <Navigator name="ActStu" component={ActStu} />
      <Navigator name="ActStuClassDetail" component={ActStuClassDetail} />
      <Navigator name="ActStuNewClass" component={ActStuNewClass} />
      <Navigator name="Chat" component={Chat} /> */}
      </NavigationContainer>
    );
  }
}

export default Router;
