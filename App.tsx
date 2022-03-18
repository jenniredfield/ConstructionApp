import { StyleSheet, Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';
import PLP from './app/screens/PLP';
import LoginScreen from './app/screens/LoginScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * This needs to contain screen stacks
 * TODO: Homescreen to PLP
 * Connect Redux Store to App
 * Add firebase auth to app
 */

 const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="PLP" component={PLP} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator> */}

      <Tab.Navigator screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: typeof Ionicons['name'] = '';

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'PLP') {
              iconName = 'search';
            } else {
              iconName = 'log-in-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })
      }>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
        <Tab.Screen name="PLP" component={PLP} options={{ headerShown: false }}  />
        <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});