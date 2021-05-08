import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Card, CardItem, Body, Content, Footer, FooterTab, Button,} from 'native-base';
import { DashStyle } from '../components/Dash/DashStyle';

const DashStuAllSchedule = ({navigation})=> {
    const data ={
        username:'Emir',
        date: 'October 11'
    };
return(
    <KeyboardAvoidingView behavior="padding">
    <View style={DashStyle.body}>
       
    <View style={DashStyle.header}>
        <Text style={DashStyle.welcome}>
                Welcome back,
        </Text>
        
        <Text style={DashStyle.username}>{data.username}</Text>
        <TextInput style={DashStyle.searchBar} placeholder="Looking for something?"/>
            
    </View>
        <Image source={require('../assets/images/Carousel.png')}
         style={DashStyle.imgNews}   />
        <View style={DashStyle.container}>
            <Card>
            <CardItem header>
                    <Text>My Class</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>  Today, {data.date}</Text>
                </Body>
            </CardItem>
            <CardItem footer>
                    <Text style={DashStyle.chooseSchedule}>All Schedule          For You</Text>
            </CardItem>
         </Card>
            </View>
       
        <Footer>
            <FooterTab>
                <Button>
                    <Image source={require('../assets/images/Home-On.png')}/>
                </Button>
                <Button>
                    <Image source={require('../assets/images/Act-Off.png')} />
                </Button>
                <Button active>
                    <Image source={require('../assets/images/Chat-Off.png')} />
                </Button>
                <Button>
                    <Image source={require('../assets/images/Prof-Off.png')} />
                </Button>
            </FooterTab>
        </Footer>
            
        
        </View></KeyboardAvoidingView>

);
};

export default DashStuAllSchedule;