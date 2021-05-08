import {StyleSheet} from 'react-native';

export const DashStyle = StyleSheet.create({
    body:{
        backgroundColor: '#E6EDF6',
        overflow:'scroll',
    },
header:{
        backgroundColor: '#5784BA',
        height:200,
        paddingTop:30,
        paddingLeft:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
},
welcome:{
    color:'#F9F9F9',
    fontFamily: 'Kanit-Medium',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
},
username:{
    fontFamily: 'Kanit-Medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 32,
        color: '#F9F9F9',
},
imgNews:{
    width:'96%',
    height:'30%',
    margin:'2%',
    marginTop:'2%',
    position:'relative',
},
    searchBar:{
        backgroundColor:'#F9F9F9',
        width:'96%',
        alignSelf:'center',
        borderRadius:20,
        height:'30%',
        marginTop:'3%',
    },
    chooseSchedule:{
        textAlign:'center',
    },
    container:{
        backgroundColor:'#F9F9F9',
        padding:'5%',
        height:'50%',
        overflow:'scroll',
},
})