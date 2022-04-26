import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
import CarItem from './components/index.js';



export default function App() {
  return (
    <View style={styles.container}>

      
      <CarItem
        title={"Outlaw GTS"}
        subtitle={"Starting from"}
        image = {require('./assets/images/GTS.png')}
        price = {"59,999"}
        hp ={"734"}
        acc={"2.99"}      
      /> 
  
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
