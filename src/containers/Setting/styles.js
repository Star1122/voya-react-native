import {
  StyleSheet,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: wp(10),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: hp(2),
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMenu: {
    width: wp(80),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#A8A8A8',
    marginRight: 10,
  },
  offGrill: {
    color: 'white',
    fontSize: wp(3),
    fontFamily: 'Antonio-Bold',
    marginTop: wp(7),
  },
  description: {
    color: '#A2A2A2',
    fontSize: wp(3),
    marginTop: wp(4),
    width: wp(100),
    lineHeight: hp(3),
    letterSpacing: wp(0.3),
    textAlign: 'center',
  },
  nextBtn: {
    width: wp(97),
    height: hp(5),
    backgroundColor: '#AB2D2E',
    borderRadius: wp(1),
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtnText: {
    color: 'white', fontFamily: 'Antonio-Bold', fontSize: hp(2),
  },
});

export default styles;
