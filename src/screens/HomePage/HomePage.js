import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Header} from '../../components/Header/Header';
import {HomePageContent} from '../../components/HomePageContent/HomePageContent';
import {useKeyboardVisibility} from '../../hooks/useKeyboardVisibility';

export const HomePage = ({navigation}) => {
  const [isPressOnSearchArea, setIsPressOnSearchArea] = useState(false);

  const isKeyboardVisible = useKeyboardVisibility();

  return (
    <View
      style={styles.body}
      onStartShouldSetResponder={() => {
        setIsPressOnSearchArea(false);
        isKeyboardVisible ? Keyboard.dismiss() : null;
      }}>
      <HomePageContent navigation={navigation} />
      <Header
        navigation={navigation}
        isPressOnSearchArea={isPressOnSearchArea}
        setIsPressOnSearchArea={setIsPressOnSearchArea}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
