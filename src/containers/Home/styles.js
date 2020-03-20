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
    padding: hp(5),
  },
  headerContainer: {
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
    fontFamily: 'Antonio-Bold',
    fontSize: 20,
    color: '#A8A8A8',
    marginRight: 10,
  },
  offElement: {
    color: '#ACACAC', fontSize: wp(17), textAlign: 'center', fontFamily: 'Antonio-Bold',
  },
  temperatureElementHeading: {
    fontSize: wp(4), textAlign: 'center', fontFamily: 'Antonio-Bold',
  },
  temperatureElementBody: {
    color: '#ACACAC', fontSize: wp(14), textAlign: 'center', fontFamily: 'Antonio-Bold',
  },
  grayTextBold4: {
    color: '#ACACAC', fontSize: wp(4), textAlign: 'center', fontFamily: 'Antonio-Bold',
  },
  darkGrayTextBold4: {
    color: '#636363', fontSize: wp(4), textAlign: 'center', fontFamily: 'Antonio-Bold',
  },
  grayTextBold10: {
    color: '#ACACAC', fontSize: wp(10), textAlign: 'center', fontFamily: 'Antonio-Bold',
  },
  rowGrayBar: {
    borderBottomColor: '#636363',
    borderBottomWidth: wp(1),
    width: wp(12),
    height: wp(7),
  },
  statsWrapper: {
    width: wp(86), display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(3),
  },
  powerBtn: {
    borderRadius: wp(14),
    width: wp(14),
    height: wp(14),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
