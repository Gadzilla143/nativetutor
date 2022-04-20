import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Header} from '../../components/Header/Header';
import {HomePageContent} from '../../components/HomePageContent/HomePageContent';
import {useKeyboardVisibility} from '../../hooks/useKeyboardVisibility';

export const HomePage = ({navigation}) => {
  const [isPressOnSearchArea, setIsPressOnSearchArea] = useState(false);

  const isKeyboardVisible = useKeyboardVisibility();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsPressOnSearchArea(false);
        isKeyboardVisible ? Keyboard.dismiss() : null;
      }}>
      <View style={styles.body}>
        <HomePageContent navigation={navigation} />
        <Header
          navigation={navigation}
          isPressOnSearchArea={isPressOnSearchArea}
          setIsPressOnSearchArea={setIsPressOnSearchArea}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
