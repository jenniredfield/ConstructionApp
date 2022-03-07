import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const PLPHeader = React.memo(function PLPHeader() {

  return (
    <View style={styles.container}>
        <Text>Azulejos</Text>
    </View>
  );
});

export default PLPHeader;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});
