import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Main from './src/pages/main';
import WeatherDetails from './src/pages/weatherDetails';

const mainNavigation = createSwitchNavigator({
  Main,
  WeatherDetails,
});

export default createAppContainer(mainNavigation);
