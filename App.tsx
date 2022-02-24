import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform
} from 'react-native';
import Products from './app/components/Products';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Construction App</Text>
      <Products />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },
});
