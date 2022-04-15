import {DISCOUNTS_DATA} from "../../constants/discount_constants";
import {renderDiscountCard} from "./renderDiscountCard";
import {FlatList, StyleSheet} from "react-native";
import React from "react";
import {SIZES} from "../../constants/style";


export const DiscountList = () => {
    const numColumns = DISCOUNTS_DATA.length === 2 ? 1 : 2
    return <FlatList
        data={DISCOUNTS_DATA}
        keyExtractor={item => `${item.id}`}
        renderItem={renderDiscountCard}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
    />
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingBottom: SIZES.HEIGHT * 0.3,
    }
})

