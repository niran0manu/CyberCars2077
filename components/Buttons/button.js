import React from 'react';
import {View, Text,Pressable} from 'react-native';

import styles from './buttonStyles';



const Button =(props) => {
  return (
    

      <View>
          <View style={styles.btnContainer} >

            <Pressable style={styles.button} onPress={() => console.log('buttn active')}><Text style={styles.buttonText}>Configure Your's Now</Text></Pressable>

            
        </View>
      </View>

  )
}



export default Button;