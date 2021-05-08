import {StyleSheet} from 'react-native';

export const ProfStyle = StyleSheet.create({
    Header:{
        backgroundColor:'#5784BA',
        height:170,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerpic:{
        width:'30%',
    },
    headername: {
        width: '60%',
        marginTop:-60,
        marginRight:30,
        alignSelf:'flex-end',
    },
    container:{
        backgroundColor:'white',
        marginTop:'3%',
        padding:'3%',
    },
    caption:{
        color:'white',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 32,
        margin:'4%',
    },
    username:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        color: '#F9F9F9',
    },
    status:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#F9F9F9',
    },
    menu:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000000',
    },
    img:{
        width:70,
        height:70,
        marginLeft:25,
    }, 
})