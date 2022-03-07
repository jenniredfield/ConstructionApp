import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Header = React.memo(function Header() {

  return (
    <View style={styles.container}>
        <Text>Aggregador de Materiais</Text>
    </View>
  );
});

export default Header;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#ccdcff'
  },
});
