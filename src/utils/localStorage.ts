export const getItem = (key: string): string | null => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (e) {
    console.error('Error getting data from localStorage', e);
    return null;
  }
};

export const setItem = (key: string, data: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving data in localStorage', e);
  }
};

export const jStorage = {
  getItem,
  setItem
};
