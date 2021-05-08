import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import InsertEmail from './src/screens/InsertEmail';
import AccountVer from './src/screens/AccountVer';
import CreateNewPass from './src/screens/CreateNewPass';
import PassChanged from './src/screens/PassChanged';
import DashStuAllSchedule from './src/screens/DashStuAllSchedule';
import ActStu from './src/screens/ActStu';
// import MyHeader from './src/components/MyHeader';
// import MyBackButton from './src/components/MyBackButton';

// function MyBackButton({onPress}) {
//   return (
//     <TouchableOpacity style={{width: 30}} onPress={onPress}>
//       <Icon name="doubleleft" size={30} color="#900" />
//     </TouchableOpacity>
//   );
// }

// function MyHeader({title, leftButton: LeftButton, style}) {
//   return (
//     <View style={style}>
//       <LeftButton />
//       <Text>{title}</Text>
//     </View>
//   );
// }

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
        <Screen name="DashStuAllSchedule" component={DashStuAllSchedule}/>
        <Screen name="ActStu" component={ActStu}/>

        
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
