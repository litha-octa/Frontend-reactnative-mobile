import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let topBorder;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? require('./src/assets/images/HomeOn.png')
              : require('./src/assets/images/Home-Off.png');
            topBorder = focused ? <View style={styles.activeBorder} /> : null;
          } else if (route.name === 'Activity') {
            iconName = focused
              ? require('./src/assets/images/Act-On.png')
              : require('./src/assets/images/Act-Off.png');
            topBorder = focused ? <View style={styles.activeBorder} /> : null;
          } else if (route.name === 'Chat') {
            iconName = focused
              ? require('./src/assets/images/Chat-On.png')
              : require('./src/assets/images/Chat-Off.png');
            topBorder = focused ? <View style={styles.activeBorder} /> : null;
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('./src/assets/images/Prof-On.png')
              : require('./src/assets/images/Prof-Off.png');
            topBorder = focused ? <View style={styles.activeBorder} /> : null;
          }

          return (
            <>
              {topBorder}
              <Image source={iconName} size={size} color={color} />
            </>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        {!props.token ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="InsertEmail" component={InsertEmail} />
            <Stack.Screen name="AccountVer" component={AccountVer} />
            <Stack.Screen name=" CreateNewPass" component={CreateNewPass} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="CreateNewChat" component={CreateNewChat} />
            <Stack.Screen name="ChatGroupDetail" component={ChatGroupDetail} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  activeBorder: {
    position: 'absolute',
    top: 0,
    width: '70%',
    height: 6.6,
    borderBottomWidth: 6.6,
    borderBottomColor: '#5784BA',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
});
const mapStateToProps = state => {
  return {isLogin: state.auth.isLogin, token: state.auth.resultLogin.token};
};
export default connect(mapStateToProps)(App);
