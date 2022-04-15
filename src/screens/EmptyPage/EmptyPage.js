import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const emptyPageContent =
  'Sorry, but this page does not have any information at this time';

export const EmptyPage = () => {
  return (
    <View style={styles.emptyPageContent}>
      <Text>{emptyPageContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyPageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
