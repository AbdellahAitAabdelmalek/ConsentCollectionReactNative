import AsyncStorage from '@react-native-community/async-storage';

const local = {
  save: (key: string, value: any) => {
    return AsyncStorage.setItem(key, stringifyValue(value));
  },
  get: async (key: string) => {
    const value = await AsyncStorage.getItem(key);

    return parseValue(value);
  },
  remove: (key: string) => {
    return AsyncStorage.removeItem(key);
  },
};

export const parseValue = (value: string | null) => {
  if (value === null) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

export const stringifyValue = (value: unknown) => {
  if (value === undefined) {
    return 'undefined';
  }

  return typeof value === 'string' ? value : JSON.stringify(value);
};

export const storage = {
  local,
};
