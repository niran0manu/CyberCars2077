import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/herrea.png')} />
      {/* <Image style={styles.menu} source={require('../../assets/images/menu.png')} /> Find the better menu  */}
    </View>
  );
};

export default Header;