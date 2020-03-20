import React, { useState, useRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { BoxShadow } from 'react-native-shadow';
import styles from './styles';
import MainCircle from '../../components/MainCircle';
import Header from './header';

const shadowWhite = {
  width: wp(60),
  height: wp(60),
  color: '#fff',
  border: wp(10),
  radius: wp(30),
  opacity: 0.3,
  x: 0,
  y: 0,
  style: { marginVertical: 5 },
};
const shadowOpt = {
  width: wp(60),
  height: wp(60),
  color: '#FF9500',
  border: wp(15),
  radius: wp(30),
  opacity: 0.3,
  x: 0,
  y: hp(3),
  style: { marginVertical: 5 },
};

const Home = (props) => {
  const onClickNextScreen = () => {
    props.navigation.navigate('Setting');
  };
  const [powerOn, SetPowerOn] = useState(false);
  const [timer, SetTimer] = useState(90);
  const [temperature, setTemperature] = useState(90);
  const changeTimer = useRef(90);
  const interval = useRef(null);
  const offElement = (
    <View>
      <Text style={styles.offElement}>
        OFF
      </Text>
    </View>
  );
  const temperatureElement = (value) => (
    <View>
      <Text style={{
        color: powerOn ? '#AB2C2D' : '#ACACAC', ...styles.temperatureElementHeading,
      }}
      >
        {powerOn ? 'HEATING' : 'SET TEMP'}
      </Text>
      <Text style={styles.temperatureElementBody}>
        {powerOn ? 100 : value}
        °
      </Text>
      {powerOn ? (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.grayTextBold4}>
            SET:
            {value}
            °
          </Text>
        </View>
      )
        : (
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => setTemperature(temperature + 1)}
            >
              <AntDesign name="up" size={25} color="#ACACAC" style={{ marginRight: wp(10) }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTemperature(temperature > 90 ? temperature - 1 : 90)}
            >
              <AntDesign name="down" size={25} color="#ACACAC" />
            </TouchableOpacity>
          </View>
        )}
    </View>
  );
  const timerElement = (value) => (
    <View style={{ color: '#ACACAC' }}>
      <Text style={styles.grayTextBold4}>
        TIMER
      </Text>
      <Text style={styles.grayTextBold10}>
        {Math.floor(value / 60)}
        :
        {value % 60}
      </Text>
      <Text style={{ fontSize: wp(4) }}> </Text>
    </View>
  );
  const probeElement = (
    <View style={{ color: '#636363' }}>
      <Text style={styles.darkGrayTextBold4}>
        PROBE
      </Text>
      <View style={styles.rowGrayBar} />
      <Text style={{ fontSize: wp(7) }}> </Text>
    </View>
  );
  const turnOn = () => {
    if (!powerOn) {
      interval.current = setInterval(() => {
        if (changeTimer.current < 1) {
          clearInterval(interval.current);
        } else {
          SetTimer((t) => t - 1);
          changeTimer.current -= 1;
        }
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
    SetPowerOn(!powerOn);
  };
  return (
    <LinearGradient style={styles.container} colors={['black', 'black', 'black', 'black', '#400']}>
      <Header onClickNextScreen={onClickNextScreen} />
      <View style={styles.content}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {powerOn && timer > 0
            ? (
              <LinearGradient
                colors={['#0001', '#AA02', '#F003']}
                style={{
                  position: 'absolute',
                  padding: wp(6),
                  borderRadius: wp(40),
                }}
              >
                <BoxShadow setting={shadowOpt} />
              </LinearGradient>
            )
            : false}
          {!powerOn && timer > 0
            ? (
              <View style={{ position: 'absolute' }}>
                <BoxShadow setting={shadowWhite} />
              </View>
            ) : false}

          <MainCircle size={wp(70)} body={timer ? temperatureElement(temperature) : offElement} />
        </View>
        <View style={styles.statsWrapper}>
          <MainCircle size={wp(40)} body={timerElement(timer)} style={{ marginRight: wp(5) }} />
          <MainCircle size={wp(40)} body={probeElement} />
        </View>

        <TouchableOpacity
          onPress={() => turnOn()}
          style={{
            marginTop: hp(3),
          }}
        >
          <View style={{ backgroundColor: powerOn ? 'white' : '#A5302E', ...styles.powerBtn }}>
            <MaterialIcons name="power-settings-new" size={wp(10)} color={powerOn ? '#A5302E' : 'white'} />
          </View>
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Antonio-Light', fontSize: wp(3), color: '#ACACAC', marginTop: hp(2),
        }}
        >
          ON SINCE 1:45 PM
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Home;
