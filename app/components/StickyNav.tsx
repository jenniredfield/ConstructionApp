import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const StickyNav = React.memo(function StickyNav() {

  return (
    <View style={styles.container}>
        <Text>HOME</Text>
        <Text>PLP</Text>
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
