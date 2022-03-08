import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Footer = React.memo(function Footer() {

  return (
    <View style={styles.container}>
        <Text>Agregador Inc.</Text>
        <Text>Rua Joao Franco Ribeiro</Text>
    </View>
  );
});

export default Footer;

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#ccdcff',
    marginTop: 40,
  },
});
