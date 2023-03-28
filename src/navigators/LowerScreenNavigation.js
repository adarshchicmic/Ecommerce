/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../screens/Authenticated/Cart/Cart';
import HomeScreen from '../screens/Authenticated/HomeScreen/HomeScreen';
import Profile from '../screens/Authenticated/Profile/Profile';
import { SvgCart, SvgHome, SvgUser } from '../Asset/svgIcon';
import { SvgXml } from 'react-native-svg';
const Tab = createBottomTabNavigator();

const LowerScreenNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          //   options={
          //     {
          //     //   tabBarIcon: ({ width, height }) => (
          //     //     // <SvgHome width={20} height={20} />
          //     //   //   <SvgXml xml={SvgHome} width="100%" height="100%" />
          //     //   ),
          //     }
          //   }
        />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </>
  );
};

export default LowerScreenNavigation;
