import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {ActStyle} from '../components/Act/ActStyle';
import { List, ListItem, Left , Right, Body} from 'native-base';

function ActStu({navigation}){
    const classData={
        name:'Front-end fundamentals',
        progress:'80%',
        score:'80',
    };
    return(
<View>
            <View style={ActStyle.header}>
                <Text style={ActStyle.title}>
                    My Class
    </Text>
    </View>
            <View style={ActStyle.body}>
                <Text style={ActStyle.subtitle}>
                    Class Name                               Progress     Score</Text>
    </View>
    <List>
            <ListItem>
                    <Left style={ActStyle.listLeft}>
                        <Text >{classData.name}</Text>
                </Left>
               
                    <Body>
                        <Text>
                           {classData.progress}                     {classData.score}
                        </Text>
                </Body>
            </ListItem>
                <ListItem>
                    <Left>
                        <Text>{classData.name}</Text>
                    </Left>
                    <Body>
                        <Text>{classData.progress}</Text>
                    </Body>
                    <Right>
                        <Text>{classData.score}</Text>
                    </Right>
                </ListItem>
            </List>
</View>
    );
};
export default ActStu;