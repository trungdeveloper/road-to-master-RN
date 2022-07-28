import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any, isObj?: boolean) => {
  try {
    await AsyncStorage.setItem(key, isObj ? JSON.stringify(value) : value);
  } catch (e) {
    // saving error
  }
};

export const getStorageData = async (key: string, isParse?: boolean) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null
      ? [isParse ? JSON.parse(jsonValue) : jsonValue]
      : null;
  } catch (e) {
    // error reading value
  }
};
