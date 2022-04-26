import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItem from '../index.js';
import cars from './cars';
import styles from './styles';




const CarCatalogue=(props) => {

    

    return (
        <View style={styles.container}>
          <FlatList
            data={cars}
            renderItem={({item}) => <CarItem  car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
          />
        </View>
      );

  
}



export default CarCatalogue;