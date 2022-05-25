import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONT_FAMILY, SIZES} from '../../constants/style';
import {TInfoPageProps} from '../../types/navigation.types';
import {DataPageWrapper} from '../../components/DataPageWrapper/DataPageWrapper';

export const InfoPage = ({
  navigation,
  route,
}: {
  navigation: TInfoPageProps['navigation'];
  route: TInfoPageProps['route'];
}) => {
  const {data} = route.params;

  return (
    <DataPageWrapper navigation={navigation} pageTitle={'Info'}>
      <Text style={styles.infoPageText}>{data.info}</Text>
    </DataPageWrapper>
  );
};

const styles = StyleSheet.create({
  emptyPageContent: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoPageText: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
});
