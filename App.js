import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
import CarCatalogue from './components/Cars/carCatalogue.js';
import Header from './components/Header/header';



export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      <CarCatalogue/> 
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
