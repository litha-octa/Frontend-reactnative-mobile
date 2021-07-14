/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Card, CardItem, Button} from 'native-base';

const News = ({navigaton}) => {
    const caption = {
      news1: 'Microsoft try to implement work from home forever',
      news2: 'New Vaccine found for COVID-19',
      news3: 'Even the deepest, coldest parts of the ocean are getting warmer',
      news4: 'Can supplements really help fight COVID-19?',
      news5: 'Snapchat hits nearly 250m daily users',
    };
  return (
    <View style={{backgroundColor: '#E5E5E5'}}>
      <View style={{padding: 10, backgroundColor: 'white', marginBottom: 10}}>
        <Text
          style={{
            fontFamily: 'Kanit-Medium',
            marginBottom: 30,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Categories
        </Text>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row',}}>
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconScience.png')}
            />
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconMath.png')}
            />
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconSoftware.png')}
            />
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconHot.png')}
            />
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconScience.png')}
            />
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconMath.png')}
            />
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconSoftware.png')}
            />
            <Image
              style={{marginLeft: 20}}
              source={require('../assets/images/IconHot.png')}
            />
          </View>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <Card>
            <CardItem>
              <Image
                style={styles.imgNews}
                source={require('../assets/images/News1.png')}
              />
              <Text style={styles.CaptNews}>{caption.news1}</Text>
            </CardItem>
            <CardItem>
              <Image
                style={styles.imgNews}
                source={require('../assets/images/News2.png')}
              />
              <Text style={styles.CaptNews}>{caption.news2}</Text>
            </CardItem>
            <CardItem>
              <Image
                style={styles.imgNews}
                source={require('../assets/images/News3.png')}
              />
              <Text style={styles.CaptNews}>{caption.news3}</Text>
            </CardItem>
            <CardItem>
              <Image
                style={styles.imgNews}
                source={require('../assets/images/News4.png')}
              />
              <Text style={styles.CaptNews}>{caption.news4}</Text>
            </CardItem>
            <CardItem>
              <Image
                style={styles.imgNews}
                source={require('../assets/images/News5.png')}
              />
              <Text style={styles.CaptNews}>{caption.news5}</Text>
            </CardItem>
            <CardItem>
              <Image
                style={styles.imgNews}
                source={require('../assets/images/News5.png')}
              />
              <Text style={styles.CaptNews}>{caption.news5}</Text>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    imgNews: {width: 150, height: 150, borderRadius: 10}
, CaptNews:{fontSize :17,fontWeight:'bold',width:200,marginLeft:20, marginTop:-70}
});
export default News;
