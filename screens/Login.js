import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginWithFacebook = () => {
    // Login with Facebook logic
  };

  const loginWithGoogle = () => {
    // Login with Google logic
  };

  const loginWithApi = () => {
    const credentials = {
      username: username,
      password: password,
      methodName: 'Login',
    };

    axios.post('YOUR_API_ENDPOINT', credentials)
      .then(response => {
        // Handle successful login response
        if (response.data.success) {
          console.log('Success');
          // Perform necessary actions on successful login
        } else {
          console.log('Failed');
        }
      })
      .catch(error => {
        // Handle login error
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerImgContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.bannerImg}
          resizeMode="contain"
          alt="Global training logo"
        />
      </View>
      <Text>Matching Trainers To Classes</Text>
      <View style={styles.loginCaption}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.subText}>login to continue using the app</Text>
      </View>
      <View style={styles.loginSectionText}>
        <View style={styles.loginCard}>
          <TextInput
            style={styles.loginInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
          <TextInput
            style={[styles.loginInput, styles.mt5]}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <View style={styles.textLinks}>
            <TouchableOpacity>
              <Text style={styles.subText}>create account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subText}>forget password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secGetStarted}>
            <Button title="Login" onPress={loginWithApi} />
          </View>
          <View>
            <Text style={[styles.subText, styles.mt5]}>or login with</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.mr2]} onPress={loginWithFacebook}>
              <Text style={styles.socialButtonText}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.ml2]} onPress={loginWithGoogle}>
              <Text style={styles.socialButtonText}>Login with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secGetStarted} hidden>
            <Image
              source={require('../assets/logo.png')}
              style={styles.footerLoginBanner}
              resizeMode="contain"
              alt="Global training logo"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImgContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  bannerImg: {
    width: 140,
    height: 140,
  },
  loginCaption: {
    marginTop: 20,
  },
  loginText: {
    color: '#2962F6',
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontSize: 30,
  },
  subText: {
    fontSize: 12,
    color: '#BCB2B2',
  },
  loginSectionText: {
    width: '100%',
    alignItems: 'center',
  },
  loginCard: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  loginInput: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    color: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  mt5: {
    marginTop: 5,
  },
  textLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  secGetStarted: {
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#CCCCCC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 10,
    borderRadius: 4,
  },
  socialButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  iconContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  mr2: {
    marginRight: 2,
  },
  ml2: {
    marginLeft: 2,
  },
  footerLoginBanner: {
    width: 50,
    height: 50,
  },
});

export default LoginScreen;
