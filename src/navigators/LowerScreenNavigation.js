/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../screens/Authenticated/Cart/Cart';
import HomeScreen from '../screens/Authenticated/HomeScreen/HomeScreen';
import Profile from '../screens/Authenticated/Profile/Profile';
import { SvgCart, SvgHome, SvgUser } from '../Asset/svgIcon';

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
          options={{
            tabBarIcon: ({ width, height }) => (
              <SvgHome width={20} height={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ width, height }) => (
              <SvgUser width={20} height={100} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ width, height }) => (
              <SvgCart width={20} height={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default LowerScreenNavigation;
