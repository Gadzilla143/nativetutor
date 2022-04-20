import {Image, StyleSheet, TouchableOpacity} from "react-native";
import React, {useContext} from "react";
import {FavoriteContext} from "../../../App";
import {setData} from "../../utils/AsyncStorage";
import icons from "../../constants/icons"

export const Like = ({ id }) => {

    const {favorite, setFavorite} = useContext(FavoriteContext)

    const onLike = () => {
        const newFavoriteData = {...favorite, [id]: !favorite[id]};
        setData('favorite', newFavoriteData)
        setFavorite(newFavoriteData)
    }

    return (
        <TouchableOpacity onPress={onLike}>
                <Image style={styles.icon} source={favorite[id] ? icons.favoriteSvg : icons.unfavoriteSvg }/>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        marginTop: 25,
        width: 30,
        height: 30
    },
})
