import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';
import Dashboard from '@screen/private/dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomSearchContainer, CustomSearchButton} from './style';
import {COLORPICKER} from '@utils/colors';
import {Routingprop} from '@navigations/navigationRoute';
import DashboardNavigationstack from '@navigations/dashboardRoute';
const Tab = createBottomTabNavigator();

const screens = [
  {
    name: 'Dashboard',
    iconfocused: 'home',
    iconfocusedout: 'home-outline',
    component: DashboardNavigationstack,
  },
  {
    name: 'Shopss',
    iconfocused: 'cart',
    iconfocusedout: 'cart-outline',
    component: Dashboard,
  },
];

function BottomTab() {
  const navigation = Routingprop();
  return (
    <>
      <CustomSearchContainer>
        <CustomSearchButton
          onPress={() => navigation?.navigate('ItemSelected')}>
          <Icon name="search" size={17} color={COLORPICKER.LIGHTCOLOR} />
        </CustomSearchButton>
      </CustomSearchContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 50,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        }}>
        {screens.map((value, index) => {
          const Component = value.component;
          return (
            <Tab.Screen
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, focused}) => (
                  <Icon
                    name={focused ? value.iconfocused : value.iconfocusedout}
                    size={30}
                    color={COLORPICKER.BUTTONCOLOR}
                  />
                ),
              }}
              key={index}
              name={value.name}
              children={() => <Component navigation={navigation} />}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
}

export default BottomTab;
