import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';


const MainCircle = ({ size, body }) => (
  <ImageBackground
    style={{
      width: size,
      height: size,
      ...styles.container,
    }}
    source={require('../../assets/images/btn_back.png')}
  >
    {body}
  </ImageBackground>
);

export default MainCircle;
