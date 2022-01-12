import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import {ACDStyle} from '../ACDStyle';
import {
  List,
  ListItem,
  Left,
  Right,
  Body,
  Card,
  Footer,
  FooterTab,
  Button,
  CardItem,
} from 'native-base';
import ModalMember from './ModalMember';

function ActFasMember({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const classes = {
    name: 'Front-end fundamentals',
  };
  return (
    <View style={ACDStyle.body}>
      <View style={ACDStyle.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ActStuNewClass');
          }}>
          <Image
            source={require('../../../assets/images/backWhite.png')}
            style={ACDStyle.backIcon}
          />
        </TouchableOpacity>
        <Text style={ACDStyle.title}>{classes.name}</Text>
      </View>
      <ScrollView>
        <View>
          <Image
            source={require('../../../assets/images/backgroundMobile.png')}
            style={ACDStyle.BgImg}
          />
          <Image
            source={require('../../../assets/images/iconComp.png')}
            style={ACDStyle.CompImg}
          />
          <Text style={ACDStyle.nameClass}>{classes.name}</Text>
          <Text style={ACDStyle.descClass}>
            Level : Beginner Category : Software Price : Free
          </Text>
        </View>

        <View style={ACDStyle.container}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 20, fontWeight: 'bold'}}>
              Information
            </Text>
            <Text style={{marginRight: 20, fontWeight: 'bold'}}>
              Class Progress
            </Text>
            <Text style={{marginRight: 20, fontWeight: 'bold'}}>
              Class Discussion
            </Text>
            <Text style={{marginRight: 20, color: 'blue', fontWeight: 'bold'}}>
              Member
            </Text>
          </View>

          <Card>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <CardItem>
                <Image source={require('../../../assets/images/Member.png')} />
                <Text style={ACDStyle.nameMember}>Deddy</Text>
              </CardItem>

              <CardItem>
                <Image source={require('../../../assets/images/Member.png')} />
                <Text style={ACDStyle.nameMember}>Cita Citata</Text>
              </CardItem>
              <CardItem>
                <Image source={require('../../../assets/images/Member.png')} />
                <Text style={ACDStyle.nameMember}>Induk Bebek</Text>
              </CardItem>
              <CardItem>
                <Image source={require('../../../assets/images/Member.png')} />
                <Text style={ACDStyle.nameMember}>Pagar Rumah</Text>
              </CardItem>
            </Pressable>
          </Card>
        </View>
      </ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EDF6BF',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ActFasMember;
