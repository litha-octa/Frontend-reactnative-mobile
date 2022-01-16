import 'react-native-gesture-handler';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

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
import Activity from './src/screens/Activity';
//student
import ChatRoom from './src/screens/ChatRoom';
import Notif from './src/screens/Notif';
import News from './src/screens/News';
import NewClass from './src/components/Act/student/NewClass';
import ActStuNewClass from './src/components/Act/student/ActivityStudentNewClass';
import ActStuMyClass from './src/components/Act/student/ActivityStudent';
import ActStuClassDetail from './src/components/Act/student/ActivityStudentClassDetail';
//fasilitator
import ActFasClassDetail from './src/components/Act/fasilitator/ActivityFasilitatorClassDetail';
import ActFasMember from './src/components/Act/fasilitator/ActivityFasilitatorMember';
import ActivityFasilitator from './src/components/Act/fasilitator/ActivityFasilitatorCreateClass';

//chat
import Chat from './src/screens/Chat';
import FormProfile from './src/components/Profile/FormProfile';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//const Router = () => {
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

function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        {/* {!props.token ? (
          <> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="InsertEmail" component={InsertEmail} />
        <Stack.Screen name="AccountVer" component={AccountVer} />
        <Stack.Screen name="CreateNewPass" component={CreateNewPass} />
        <Stack.Screen name="PassChanged" component={PassChanged} />
        {/* </>
        ) : (
          <> */}

        {/* Dashboard */}
        <Stack.Screen name="Dashboard" component={HomeTabs} />
        <Stack.Screen name="DashFas" component={DashFas} />

        {/* Profile */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        {/* Activity */}
        <Stack.Screen name="ActStuNewClass" component={ActStuNewClass} />
        <Stack.Screen name="ActStuMyClass" component={ActStuMyClass} />
        <Stack.Screen name="ActStuClassDetail" component={ActStuClassDetail} />
        <Stack.Screen name="ActFasClassDetail" component={ActFasClassDetail} />
        <Stack.Screen name="ActFasMember" component={ActFasMember}/>
        <Stack.Screen name ="NewClass" component={NewClass}/>

        <Stack.Screen
          name="ActivityFasilitator"
          component={ActivityFasilitator}
        />
        <Stack.Screen name="Activity" component={Activity} />
        {/* Chat */}
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="FormProfile" component={FormProfile} />
        <Stack.Screen name="Notif" component={Notif} />
        <Stack.Screen name="News" component={News} />
        {/* </>
        )} */}
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

// const mapStateToProps = state => {
//   return {
//     isLogin: state.loginReducer.isLogin,
//     //token: state.loginReducer.result.token,
//   };
// };
// export default connect(mapStateToProps)(Router);

export default Router;
