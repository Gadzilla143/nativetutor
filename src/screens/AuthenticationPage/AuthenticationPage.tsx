import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {TInfoPageProps} from '../../types/navigation.types';
import {DataPageWrapper} from '../../components/DataPageWrapper/DataPageWrapper';
import {useKeyboardVisibility} from '../../hooks/useKeyboardVisibility';

export const AuthenticationPage = ({
  navigation,
}: {
  navigation: TInfoPageProps['navigation'];
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isKeyboardVisible = useKeyboardVisibility();

  const logInUser = (userEmail: string, userPassword: string) => {
    console.log(userEmail, userPassword);
  };

  const signUpUser = (userEmail: string, userPassword: string) => {
    console.log(userEmail, userPassword);
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
          placeholder={'Email'}
          placeholderTextColor={COLORS.GREY_TEXT}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.elementWidth}
          secureTextEntry={true}
          autoCorrect={false}
          placeholder={'Password'}
          placeholderTextColor={COLORS.GREY_TEXT}
          onChangeText={setPassword}
        />
        <TouchableWithoutFeedback onPress={() => logInUser(email, password)}>
          <Text style={[styles.authenticationButton, styles.loginButton]}>
            Login
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => signUpUser(email, password)}>
          <Text style={[styles.authenticationButton, styles.sigUpButton]}>
            Sign Up
          </Text>
        </TouchableWithoutFeedback>
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
  elementWidth: {
    width: '100%',
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
  authenticationButton: {
    width: '100%',
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
