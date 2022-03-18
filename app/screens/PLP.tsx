import React from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import StickyNav from '../components/StickyNav';
import PLPHeader from '../components/PLPHeader';
import Products from '../components/Products';

const PLP = React.memo(function PLP() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
      <View style={styles.wrapper}>
        <PLPHeader />
        <Products />
      </View>
    </SafeAreaView>
  );
});

export default PLP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  wrapper: {
    flex: 1,
  },
  footerWrapper: {
    flex: 0,
    alignSelf: 'stretch',
  },
});
