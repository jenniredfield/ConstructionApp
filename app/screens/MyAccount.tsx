import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
} from 'react-native';


import { useSelector } from 'react-redux';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const MyAccount = React.memo(function MyAccount({ navigation }: Props) {
  const user = useSelector((state: AppState) => state.user)
  console.log("🚀 ~ file: MyAccount.tsx ~ line 21 ~ MyAccount ~ user", user)
  return (
    <SafeAreaView style={styles.container}>
        <Text>My Account Area</Text>
    </SafeAreaView>
  );
});

export default MyAccount;

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