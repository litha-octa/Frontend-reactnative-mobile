import 'react-native-gesture-handler';
import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {connect} from 'react-redux';

//import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

// auth
import Login from './src/screens/Login';
import Register from './src/screens/Register';
//forgot pass
import InsertEmail from './src/screens/InsertEmail';
import AccountVer from './src/screens/AccountVer';
import CreateNewPass from './src/screens/CreateNewPass';
import PassChanged from './src/screens/PassChanged';
//Dashboard
import Dashboard from './src/screens/Dashboard';
//student
//import DashStuAllSchedule from './src/screens/DashStuAllSchedule';
//fasilitator
import DashFas from './src/components/Dash/Fasilitator';
//activity
//student
import ActStuNewClass from './src/screens/ActStuNewClass';
import ActStuMyClass from './src/screens/ActStu';
import ActStuClassDetail from './src/screens/ActStuClassDetail';
//fasilitator
import ActFasClassDetail from './src/screens/ActFasClassDetail';
import ActFasMember from './src/screens/ActFasMember';
import ActivityFas from './src/screens/ActivityFas';
import Activity from './src/screens/Activity';
//chat
import Chat from './src/screens/Chat';

import SplashScreen from './src/screens/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//const Router = () => {
class Router extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          {/* Login */}
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          {/* Register */}
          <Stack.Screen name="Register" component={Register} />
          {/* Forgot Password */}
          <Stack.Screen name="InsertEmail" component={InsertEmail} />
          <Stack.Screen name="AccountVer" component={AccountVer} />
          <Stack.Screen name="CreateNewPass" component={CreateNewPass} />
          <Stack.Screen name="PassChanged" component={PassChanged} />
          {/* Dashboard */}
          <Stack.Screen name="DashFas" component={DashFas} />

          <Stack.Screen name="Dashboard" component={Dashboard} />
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
          <Stack.Screen name="ActFasMember" component={ActFasMember} />

          <Stack.Screen name="ActivityFas" component={ActivityFas} />
          <Stack.Screen name="Activity" component={Activity} />
          {/* Chat */}
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Router;
