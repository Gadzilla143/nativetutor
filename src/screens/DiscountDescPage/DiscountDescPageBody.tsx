import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../constants/style';
import {Like} from '../../components/Like/Like';
import {IDiscountData} from '../../types/discount.types';

export const DiscountDescPageBody = ({
  discountData,
}: {
  discountData: IDiscountData;
}) => {
  return (
    <>
      {discountData && (
        <View style={styles.container}>
          <View style={styles.paddings}>
            <Like data={discountData} />
            <Text style={styles.title}>{discountData?.engTitle}</Text>
            <Text style={styles.shortDesc}>{discountData?.shortDesc}</Text>
            <Text style={styles.promocode}>{discountData?.promocode}</Text>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.discount}>
                Скидка: {discountData?.discount}
              </Text>
              <Text>Телефон {discountData?.address}</Text>
              <Text>{discountData?.instructions}</Text>
              <Text>{discountData?.instructions}</Text>
              <Text>{discountData?.instructions}</Text>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.HEIGHT,
    alignSelf: 'center',
    backgroundColor: COLORS.DARK_GREY,
    marginTop: 100,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: SIZES.WIDTH,
  },
  title: {
    marginTop: 120,
    fontSize: SIZES.h1,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  paddings: {
    flex: 1,
    alignSelf: 'center',
    width: SIZES.WIDTH * 0.8,
  },
  discount: {
    marginTop: 10,
  },
  shortDesc: {
    marginTop: 5,
    alignSelf: 'center',
  },
  promocode: {
    width: SIZES.WIDTH * 0.5,
    height: 60,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    fontSize: SIZES.h2,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    paddingTop: 10,
    margin: 20,
    borderRadius: 20,
  },
  scrollView: {
    marginBottom: 250,
  },
});
