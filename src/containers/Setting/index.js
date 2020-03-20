import React from 'react';
import {
  TouchableOpacity, Image, Text, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './styles';
import MainCircle from '../../components/MainCircle';
import Header from './header';

const machineImage = require('../../assets/images/machine.png');

const Setting = (props) => {
  const onClickBackScreen = () => {
    props.navigation.navigate('Home');
  };
  const machine = (
    <View style={{ color: '#ACACAC' }}>
      <Image
        source={machineImage}
        style={{
          width: wp(50),
          tintColor: '#A6A6A6',
        }}
      />
    </View>
  );
  return (
    <LinearGradient style={styles.container} colors={['black', 'black', 'black', 'black', '#400']}>
      <Header onClickBackScreen={onClickBackScreen} />
      <View style={styles.content}>
        <MainCircle size={wp(95)} body={machine} />
        <Text style={styles.offGrill}>
          TURN OFF GRILL
        </Text>
        <Text
          style={styles.description}
        >
          Once the pellets have traveled through the tube
          {'\n'}
          and have started dropping (roughly 2 to 4 minutes),
          {'\n'}
          turn
          {' '}
          <Text style={{ fontWeight: 'bold' }}>OFF</Text>
          {' '}
          the grill.
        </Text>

        <TouchableOpacity
          onPress={() => { }}
        >
          <View style={styles.nextBtn}>
            <Text style={styles.nextBtnText}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Setting;
