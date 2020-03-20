import React from 'react';
import {
  TouchableOpacity, View, Image, Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Header = ({ onClickNextScreen }) => {
  const menuImage = require('../../assets/images/menu.png');

  return (
    <View style={styles.headerContainer}>
      <Image
        source={menuImage}
        style={{
          width: 30,
          height: 20,
        }}
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>THE FLAMINATOR</Text>
        <Ionicons name="ios-wifi" size={25} color="#ADADAD" />
      </View>
      <TouchableOpacity
        onPress={onClickNextScreen}
      >
        <Ionicons name="md-settings" size={32} color="#ADADAD" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
