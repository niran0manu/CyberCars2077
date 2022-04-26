import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
import Button from './Buttons/button.js';



const CarItem =(props) => {

  const {title, subtitle, image, price, hp,acc } = props.car;

  return (
    <View style={styles.carContainer}>

        <ImageBackground source={image} resizeMode="contain" style={styles.image}></ImageBackground> 

        <View style = {styles.titles}>
          <Text style = {styles.title} > {title} </Text> 
          <Text style = {styles.subtitle}> {subtitle} <Text style = {styles.price}>€$ {price}</Text> </Text>
          <Text style = {styles.specs}>{hp} hp, 0-60 mph* in  {acc}s</Text>
          
        </View>

        <View style = {styles.buttons} >
          <Button type= "primary"  content={"Configure Your's Now"} onPress={() => { console.log("Configuration has been initiated")}}/>
          <Button  type= "secondary" content={"Book a Test Drive"} onPress={() => { console.log("Your car will arrive soon")}}/>
        </View>
        

      </View>

  )
}



export default CarItem;