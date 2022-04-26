import React from 'react';
import {View, Text,Pressable} from 'react-native';

import styles from './buttonStyles';



const Button =(props) => {

  const type = props.type;
  console.log(type);

  const backgroundColor = type === "primary" ? '#fcee09' : '#ff003c'; 
  const textColor = type === "primary" ? 'Black' : 'white'; 

  return (
    

      <View>
          <View style={styles.btnContainer}>

            <Pressable style={[styles.button, { backgroundColor: backgroundColor}]} onPress={() => console.log('buttn active')}><Text style={[styles.buttonText,{color:textColor}]}>Configure Your's Now</Text></Pressable>

            
        </View>
      </View>

  )
}



export default Button;