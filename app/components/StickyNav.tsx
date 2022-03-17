import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const StickyNav = React.memo(function StickyNav() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="PLP" onPress={() => navigation.navigate('PLP')} />
      <Button title="Login" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
});

export default StickyNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopColor: '#d6d6d6',
    elevation: 2,
  },
});
