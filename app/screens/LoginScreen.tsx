import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { auth } from '../../firebase';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = React.memo(function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user Logged in', user);
        // navigation.navigate('HomeScreen')
        setIsLoggedIn(true);
      }
    });

    return unsubscribe;
  });

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: { user: any }) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in with: ', user.email);
      })
      .catch((error: { code: any; message: any }) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleRegister = () => {
    console.log('register handler');
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: { user: any }) => {
        // Signed in
        const user = userCredential.user;
        console.log('Registered with: ', user.email);
      })
      .catch((error: { code: any; message: any }) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log('Logged Out');
      setIsLoggedIn(false);
    }).catch(err => console.log(err));
  };

  const isLoggedInJSX = (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={[styles.button, styles.buttonPrimaryBg]}>
        <Text style={styles.buttonLightText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      {isLoggedIn ? (
        isLoggedInJSX
      ) : (
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="email"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister} style={[styles.button, styles.buttonPrimaryBg]}>
              <Text style={styles.buttonLightText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  inputContainer: {
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    marginBottom: 10,
    borderRadius: 20,
    padding: 16
  },
  button: {
    padding: 16,
    borderColor: '#bebebe',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 300
  },
  buttonPrimaryBg: {
    borderWidth: 0,
    backgroundColor: '#195be9',
  },
  buttonLightText: {
    color: 'white'
  }
});
