import {DISCOUNTS_DATA} from "../../constants/discount_constants";
import {DiscountCard} from "./renderDiscountCard";
import {FlatList, StyleSheet} from "react-native";
import React from "react";
import {SIZES} from "../../constants/style";


export const DiscountList = ({ navigation }) => {
    const data = DISCOUNTS_DATA.discounts.minsk;
    const numColumns = data.length === 2 ? 1 : 2;
    const renderDiscountCard = ({item}) => {
        return (
            <DiscountCard
                {...item}
                onPress={() => navigation.navigate('DiscountDesc', {
                    itemId: item.id,
                })}
            />)
    }
    return <FlatList
        data={data}
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

