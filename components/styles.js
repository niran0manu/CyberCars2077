import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width:'100%',
        height: Dimensions.get('window').height,
      },
      image:{
        width:'100%',
        height:'100%',    
        position: 'absolute',
    
    
      },
      titles: {
        marginTop: '30%',
        width:'100%',
        alignItems:'center',
    
      },
    
      title: {
        fontSize: 40,
        fontWeight:'500',
        color:'#fff',
    
      },
      subtitle: {
        fontSize: 18,
        color:'white',
        fontWeight:'300',
    
    
      },

      price:{
        fontSize: 22,       
        color:'#dc143c',
      },

      specs:{
        fontSize: 16,
        color:'lightblue',
        

      },

      buttons:{
        position: 'absolute',
        bottom :70,
        width:'100%',

      },


});

export default styles;