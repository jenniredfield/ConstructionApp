import { StyleSheet, Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';
import PLP from './app/screens/PLP';
import LoginScreen from './app/screens/LoginScreen';

// import Footer from './app/components/Footer';
// import Header from './app/components/Header';
// import Search from './app/components/Search';
// import StickyNav from './app/components/StickyNav';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * This needs to contain screen stacks
 * TODO: Homescreen to PLP
 * Connect Redux Store to App
 * Add firebase auth to app
 */


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="PLP" component={PLP} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
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