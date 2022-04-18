
import React from "react";

import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS, IOS, SIZES} from "../../constants/style";
import icons from "../../constants/icons";

export const DiscountHeader = ({navigation, title}) => {
    return (
        <View
            style={styles.wrapper}
        >
            <View
                style={styles.container}
            >
                {!IOS &&
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.imageWrapper}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </TouchableOpacity>
                }
                <View>
                    <Text
                        style={styles.title}
                    >{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        left: 0,
        right: 0,
        height: SIZES.HEIGHT * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.WHITE
    },
    container: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: SIZES.WIDTH * 0.8,
    },
    imageWrapper: {
        left: 0,
        position: 'absolute'
    },
    image: {
        width: 20,
        height: 30,
    },
    title: {
        fontSize: SIZES.h1,
        color: COLORS.BLACK,
        fontWeight: 'bold',
    },
})
