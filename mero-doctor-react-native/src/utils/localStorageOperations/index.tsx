import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLocalData = async (key:any, value:any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`SAVED---------`,key,value)
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

export const getLocalData = async (key:any) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

export const deleteLocalData = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Data with key "${key}" has been deleted.`);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  export const getAllData = async (): Promise<Record<string, any>> => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
  
      const allData: Record<string, any> = {};
      result.forEach(([key, value]) => {
        try {
          allData[key] = value ? JSON.parse(value) : null;
        } catch {
          allData[key] = value;
        }
      });
  
      return allData;
    } catch (error) {
      console.error('Error fetching all data:', error);
      return {};
    }
  };


