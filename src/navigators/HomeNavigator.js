import { createStackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import Setting from '../containers/Setting';


const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      header: null,
    },
  },
});

export default HomeNavigator;
