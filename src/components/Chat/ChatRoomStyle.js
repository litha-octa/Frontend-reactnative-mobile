import {StyleSheet, Dimensions, StatusBar} from 'react-native';
export const styleChat = StyleSheet.create({
  chtTimeStamp: {
    position: 'absolute',
    right: 10,
    fontSize: 14,
    bottom: 7,
    fontFamily: 'Roboto',
  },
  chtMessage: {
    width: '75%',
    fontSize: 18,
  },
  roomContainer: {
    backgroundColor: '#E6EDF6',
    flex: 1,
    padding: 10,
    height: Dimensions.get('window').height - 200,
  },
  bubbleContainer: {
    borderRadius: 20,
    marginBottom: 15,
    padding: 5,
    paddingLeft: 20,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 5,
  },
  overlay: {
    backgroundColor: 'rgba(230, 237, 246, 0.75)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
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
    zIndex: 2,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Kanit-Medium',
    fontSize: 20,
    color: 'white',
  },
  action: {
    fontFamily: 'Kanit-Medium',
    fontSize: 16,
    color: 'white',
  },
  headSection: {
    // height: 214,
    padding: 24,
    backgroundColor: '#F9F9F9',
  },
  groupInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupName: {
    marginLeft: 40,
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
  },
  note: {
    color: '#787878',
    fontFamily: 'Roboto-Regular',
    marginTop: 12,
  },
  txtParticipant: {
    fontFamily: 'Kanit-Regular',
    fontSize: 15,
  },

  mainSection: {
    marginTop: 5,
    padding: 24,
    backgroundColor: '#F9F9F9',
  },

  memberList: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  memberItem: {
    alignItems: 'center',
  },
  memberName: {
    fontFamily: 'Kanit-Regular',
    fontSize: 14,
  },
  iconBACK: {
    color: 'white',
    fontSize: 32,
  },
});
