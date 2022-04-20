
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e)
    }
}

export const setData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e)
    }
}