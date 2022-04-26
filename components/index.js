import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
import Button from './Buttons/button.js';



const CarItem =(props) => {
  return (
    <View style={styles.carContainer}>

        <ImageBackground source={require('../assets/images/GTS.png')} resizeMode="contain" style={styles.image}></ImageBackground>

        <View style = {styles.titles}>
          <Text style = {styles.title}> Outlaw GTS </Text>
          <Text style = {styles.subtitle}>  Starting from €$ 69,999 </Text>
          
        </View>
        <Button type= "primary" />
        <Button  type= "secondary"/>

      </View>

  )
}



export default CarItem;