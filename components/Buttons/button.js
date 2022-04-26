import React from 'react';
import {View, Text,Pressable} from 'react-native';

import styles from './buttonStyles';



const Button =(props) => {


  const {type, content, onPress} = props;

  const backgroundColor = type === "primary" ? '#fcee09' : '#ff003c'; 
  const textColor = type === "primary" ? 'Black' : 'white'; 

  return (
    

      <View>
          <View style={styles.btnContainer}>

            <Pressable style={[styles.button, { backgroundColor: backgroundColor}]} onPress={() => onPress()}>
              <Text style={[styles.buttonText,{color:textColor}]}>
               {content} 
              </Text>
            </Pressable>

            
        </View>
      </View>

  )
}



export default Button;