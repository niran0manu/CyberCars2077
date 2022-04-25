import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
import CarItem from './components/index.js';



export default function App() {
  return (
    <View style={styles.container}>

      <CarItem/> 

      
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
