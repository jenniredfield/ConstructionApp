import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PLPHeader from '../components/PLPHeader';
import Products from '../components/Products';

const PLP = React.memo(function PLP() {

  return (
    <View style={styles.container}>
        <PLPHeader />
        <Products />
    </View>
  );
});

export default PLP;

const styles = StyleSheet.create({
  container: {

  },
});
