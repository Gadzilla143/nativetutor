import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Header} from '../../components/Header/Header';
import {NestedDropdown} from '../../components/NestedDropdown/NestedDropdown';
import {useKeyboardVisibility} from '../../hooks/useKeyboardVisibility';
import {PAGES_DATA} from '../../constants/page_constants';
import {HomePageScreenNavigationProp} from '../../types/navigation.types';

export const HomePage = ({
  navigation,
}: {
  navigation: HomePageScreenNavigationProp;
}) => {
  const [isPressOnSearchArea, setIsPressOnSearchArea] = useState(false);

  const isKeyboardVisible = useKeyboardVisibility();

  return (
    <View
      style={styles.body}
      onStartShouldSetResponder={() => {
        setIsPressOnSearchArea(false);
        isKeyboardVisible ? Keyboard.dismiss() : null;
        return true;
      }}>
      <NestedDropdown navigation={navigation} data={PAGES_DATA} />
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
