import React from "react";

import {Image, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants/style";
import {TouchableOpacity} from "react-native-gesture-handler";


export const DiscountCard = (props) => {
    const {
        title,
        img,
        discount,
        shortDesc,
        onPress,
    } = props;
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
                    numberOfLines={1}
                    ellipsizeMode='tail'
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
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text
                        style={styles.details}
                    >
                        {'Details'}
                    </Text>
                </TouchableOpacity>
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
        justifyContent: 'space-between',
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
        textAlign: 'center',
        width: SIZES.WIDTH * 0.32,
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
        color: COLORS.DARK_BLUE,
        marginBottom: 10,
    },
})
