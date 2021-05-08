import {StyleSheet} from 'react-native';

export const LoginStyle = StyleSheet.create({
    body: { backgroundColor:'#F9F9F9',
            height:'100%',        
    },
    title:{
        color: 'blue',
        fontFamily: 'Kanit-Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 32,
        color: '#010620',
        textAlign: 'center',
        marginTop:40,
        marginBottom:30,
    },
    descInput:{
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color:'#ADA9BB',
    marginLeft:50,
    marginTop:10,
    },
    inputLogin:{
        width: 310,
        height: 50,
        alignSelf : 'center',
        backgroundColor: '#F9F9F9',
        borderColor: '#ADA9BB',
        borderRadius: 10,
        color: 'black',
        borderWidth:2,
    },
    buttonLogin : {
        backgroundColor: '#5784BA',
        top: 45,
        width: 300,
        height:50,
        borderRadius:10,
        alignSelf:'center',
        padding:10,
        marginBottom: 10,
    },
    labelButtonLogin:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: '500',
    },
    buttonLoginWithGoogle: {
        backgroundColor: '#000D4F14',
        top: 45,
        width: 300,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
    },
    labelButtonLoginWithGoogle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: '500',
        marginTop:'-10%',
        marginLeft:'7%',
    },
    forgotPass:{
        color:'black',
        position: 'absolute',
        width: 97,
        height: 14,
        left: 250,
        top: 270,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
    },
    logoBtn:{
        width: 30,
        marginLeft:'20%',
        marginTop:'2%',
    },
    Regis:{
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    color: '#ADA9BB',
    top:100,
    textAlign:'center',
    },
    link:{color:'blue',}

});