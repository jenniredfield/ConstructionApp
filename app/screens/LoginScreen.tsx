import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
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

  const handleLogin = () => {};

  const handleRegister = () => {
    console.log('register handler')
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential: { user: any; }) => {
      // Signed in 
      const user = userCredential.user;
      console.log("🚀 ~ file: LoginScreen.tsx ~ line 26 ~ .then ~ user email", user.email)
    })
    .catch((error: { code: any; message: any; }) => {
      const errorCode = error.code;
      console.log("🚀 ~ file: LoginScreen.tsx ~ line 33 ~ handleRegister ~ errorCode", errorCode)
      const errorMessage = error.message;
      console.log("🚀 ~ file: LoginScreen.tsx ~ line 35 ~ handleRegister ~ errorMessage", errorMessage)
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="email" style={styles.input} value={email} onChangeText={(text) => setEmail(text)}/>
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
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
  },
  button: {
    backgroundColor: '#bebebe',
    borderWidth: 1,
    borderColor: 'gray',
  },
});
