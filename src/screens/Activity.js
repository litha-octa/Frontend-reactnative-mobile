import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import DashStuAllSchedule from './DashStuAllSchedule';
import DashFas from './DashFas';
import {connect} from 'react-redux';

function Activity({...props}) {
  const role = props.role;
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topSection}>
            <Text style={styles.title}>Activity</Text>
          </View>
        </View>
        {role === 'student' ? (
          <DashStuAllSchedule navigation={props.navigation} />
        ) : (
          <DashFas navigation={props.navigation} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EDF6',
    flex: 1,
  },
  header: {
    paddingTop: StatusBar.currentHeight + 12 + (40 - StatusBar.currentHeight),
    backgroundColor: '#5784BA',
    paddingHorizontal: 26,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    paddingBottom: 24,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Kanit-Medium',
    fontSize: 32,
    color: 'white',
  },
});
const mapStateToProps = state => ({
  token: state.auth.resultLogin.token,
  role: state.auth.currentUser.role,
});
export default connect(mapStateToProps)(Activity);