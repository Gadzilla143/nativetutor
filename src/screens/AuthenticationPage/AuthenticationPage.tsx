import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {TInfoPageProps} from '../../types/navigation.types';
import {DataPageWrapper} from '../../components/DataPageWrapper/DataPageWrapper';
import {useKeyboardVisibility} from '../../hooks/useKeyboardVisibility';
import firebase from 'firebase/compat';
import {AuthContext} from '../../../App';
import {IAuthContext} from '../../types/context.types';
import {setData} from '../../utils/AsyncStorage';

export const AuthenticationPage = ({
  navigation,
}: {
  navigation: TInfoPageProps['navigation'];
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {setCurrentUser} = useContext(AuthContext) as IAuthContext;

  const isKeyboardVisible = useKeyboardVisibility();

  const setUserEmail = (userEmail: string) => {
    if (errorMessage) {
      setErrorMessage('');
    }

    setEmail(userEmail);
  };

  const setUserPassword = (userPassword: string) => {
    if (errorMessage) {
      setErrorMessage('');
    }

    setPassword(userPassword);
  };

  const logInUser = async (userEmail: string, userPassword: string) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(data => {
        setData('auth', data);
        setCurrentUser(data);
        navigation.navigate('Home');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  const signUpUser = async (userEmail: string, userPassword: string) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(data => {
        setData('auth', data);
        setCurrentUser(data);
        navigation.navigate('Home');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  return (
    <DataPageWrapper navigation={navigation} pageTitle={'Authentication'}>
      <View
        style={[
          styles.authenticationContainer,
          isKeyboardVisible
            ? styles.displayWithKeyboard
            : styles.displayWithoutKeyboard,
        ]}>
        <TextInput
          style={styles.elementWidth}
          autoCorrect={false}
          value={email}
          placeholder={'Email'}
          placeholderTextColor={COLORS.GREY_TEXT}
          onChangeText={email => setUserEmail(email)}
        />
        <TextInput
          style={styles.elementWidth}
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          placeholder={'Password'}
          placeholderTextColor={COLORS.GREY_TEXT}
          onChangeText={password => setUserPassword(password)}
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => logInUser(email, password)}
          style={styles.authenticationButtonSize}>
          <Text style={[styles.authenticationButton, styles.loginButton]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => signUpUser(email, password)}
          style={styles.authenticationButtonSize}>
          <Text style={[styles.authenticationButton, styles.sigUpButton]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </DataPageWrapper>
  );
};

const styles = StyleSheet.create({
  authenticationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  displayWithKeyboard: {
    marginTop: 30,
    justifyContent: 'flex-start',
  },
  displayWithoutKeyboard: {
    justifyContent: 'center',
  },
  errorMessage: {
    color: COLORS.ERROR,
    marginBottom: 10,
    ...FONT_FAMILY,
    textAlign: 'center',
    width: SIZES.WIDTH * 0.8,
  },
  elementWidth: {
    width: SIZES.WIDTH * 0.8,
    fontSize: SIZES.h4,
    ...FONT_FAMILY,
    paddingLeft: 15,
    borderRadius: 20,
    maxHeight: 40,
    marginBottom: 20,
    borderWidth: 2,
    padding: 10,
    borderColor: COLORS.LIGHT_BLUE,
  },
  authenticationButtonSize: {
    width: SIZES.WIDTH * 0.8,
  },
  authenticationButton: {
    padding: 10,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    ...FONT_FAMILY,
    color: COLORS.WHITE,
    borderRadius: 20,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: COLORS.DARK_BLUE,
    marginBottom: 10,
  },
  sigUpButton: {
    backgroundColor: COLORS.BLUE,
  },
});
