import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import PLP from './app/containers/PLP';
import Search from './app/components/Search';
import StickyNav from './app/components/StickyNav';

/**
 * This needs to contain screen stacks
 */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
      <ScrollView>
        <PLP />
        <Footer />
      </ScrollView>

      <StickyNav />
    </SafeAreaView>
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
