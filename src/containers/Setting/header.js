import React from 'react';
import {
  TouchableOpacity, View, Text,
} from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './styles';

const Header = ({ onClickBackScreen }) => (
  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <View style={styles.headerMenu}>
      <TouchableOpacity
        onPress={onClickBackScreen}
      >
        <AntDesign name="left" size={25} color="#ADADAD" />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={{ ...styles.titleText, fontFamily: 'Antonio-Bold' }}>SEASONING YOUR SILVERBAC</Text>
      </View>
      <TouchableOpacity
        onPress={onClickBackScreen}
      >
        <Ionicons name="md-close" size={32} color="#ADADAD" />
      </TouchableOpacity>
    </View>
    <View style={{
      flexDirection: 'row', width: wp(33), justifyContent: 'space-between', alignItems: 'center',
    }}
    >
      <FontAwesome name="circle" size={wp(3)} color="#AB2C2D" />
      <FontAwesome name="circle" size={wp(3)} color="#AB2C2D" />
      <FontAwesome name="circle" size={wp(3)} color="#AB2C2D" />
      <FontAwesome name="circle" size={wp(3)} color="#AB2C2D" />
      <Ionicons name="md-radio-button-on" size={wp(5)} color="#AB2C2D" />
      <Ionicons name="md-radio-button-off" size={wp(3)} color="#aaa" />
      <Ionicons name="md-radio-button-off" size={wp(3)} color="#aaa" />
    </View>
  </View>
);

export default Header;
