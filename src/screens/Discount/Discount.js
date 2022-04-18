import React from "react";
import {StyleSheet, View} from "react-native";
import {DiscountHeader} from "./DiscountHeader";
import {SIZES} from "../../constants/style";
import {DiscountList} from "./DiscountList";

export const DiscountPage = ({route, navigation}) => {

    return (
        <View
            style={styles.wrapper}>
            <View
                style={styles.container}
            >
                <DiscountHeader navigation={navigation}/>
                <DiscountList />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        height: SIZES.HEIGHT,
        alignSelf: 'center',
    }
})

