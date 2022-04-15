import React from "react";

import {Image, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants/style";


export const renderDiscountCard = ({item}) => {
    const {
        title,
        img,
        discount,
        shortDesc,
    } = item
    return (
        <View
            style={styles.wrapper}
        >
            <View
                style={styles.container}
            >
                <Image
                    style={styles.logo}
                    source={img}
                />
                <Text
                    style={styles.title}
                >
                    {title}
                </Text>
                <Text
                    style={styles.desc}
                >
                    {shortDesc}
                </Text>
                <Text
                    style={styles.discount}
                >
                    {discount}
                </Text>
                <Text
                    style={styles.details}
                >
                    {'Details'}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        width: SIZES.WIDTH * 0.4,
        height: SIZES.HEIGHT * 0.3,
        paddingTop: 50,
        paddingLeft: 5,
        paddingRight: 5,
    },
    container: {
        position: "relative",
        width: '100%',
        height: '100%',
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.DARK_GREY,
        backgroundColor: COLORS.LIGHT_GREY,
        alignContent: "center",
        justifyContent: 'space-around',
        padding: 5,
    },
    logo: {
        alignSelf: 'center',
        position: 'absolute',
        width: 80,
        height: 80,
        marginTop: -40,
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.DARK_GREY,
    },
    title: {
        alignSelf: 'center',
        color: COLORS.BLACK,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    desc: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 12
    },
    discount: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: COLORS.WHITE,
        width: '60%',
        height: 30,
        borderRadius: 10,
        fontWeight: 'bold',
        color: COLORS.BLACK
    },
    details: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 15,
        borderRadius: 10,
        fontWeight: 'bold',
        color: COLORS.LIGHT_BLUE
    },
})
