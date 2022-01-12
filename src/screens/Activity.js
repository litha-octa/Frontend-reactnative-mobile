import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {ActFas} from '../components/Act/ActFas';
import ActStuNewClass from '../components/Act/student/ActivityStudentNewClass';
import ActivityFasilitator from '../components/Act/fasilitator/ActivityFasilitatorCreateClass';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';

function Activity(props) {
  const role = props.role;
  const name = props.name;
  console.log(`masuk ke activity ${role}`);
  return (
    <ScrollView>
      <View style={ActFas.body}>
        {role === 'student' ? <ActStuNewClass /> : <ActivityFasilitator />}
      </View>
    </ScrollView>
  );
}
const mapStateToProps = state => ({
  //auth: state.auth,
  getUserReducer: state.getUserReducer,
  role: state.getUserReducer.currentUser.role,
  // email: state.auth.resultLogin.data.email,
  name: state.getUserReducer.currentUser.name,
});

const mapDispatchToProps = dispatch => ({});

const ConnectedActivity = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activity);
export default ConnectedActivity;
//export default Activity;
