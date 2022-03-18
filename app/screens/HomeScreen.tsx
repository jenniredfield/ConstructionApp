import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  SafeAreaView,
  ScrollView
} from 'react-native';

import Header from '../components/Header';
import Search from '../components/Search';
// import Footer from '../components/Footer'; Not used?
import HomeHero from '../components/HomeHero';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = React.memo(function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
      <ScrollView>
        <View>
           <HomeHero />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
  });