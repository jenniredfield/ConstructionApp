import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  SafeAreaView,
  ScrollView,
  Button,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';
import Search from '../components/Search';
import HomeHero from '../components/HomeHero';
import { useSelector } from 'react-redux';
import { seedTestDB } from '../seed/seed';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = React.memo(function HomeScreen({ navigation }: Props) {
  const user = useSelector((state: AppState) => state.user);

  const handleSeed = () => {
    seedTestDB();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
      <ScrollView>
        <View>
          <HomeHero />
          {/* <Button title='Seed DB' onPress={handleSeed}>Seed DB</Button> */}
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
    paddingTop: StatusBar.currentHeight || 0,
  },
});
