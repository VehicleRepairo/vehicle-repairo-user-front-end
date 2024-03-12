import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from "zustand";

const getUserInfoFromStorage = async () => {
  try {
    const userInfo = await AsyncStorage.getItem("user-info");
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Error retrieving user-info data:", error);
    return null;
  }
};

const useAuthStore = createStore((set) => ({
    user: null,
    login: async (user) => {
      try {
        set({ user });
        await AsyncStorage.setItem("user-info", JSON.stringify(user));
      } catch (error) {
        console.error("Error saving user info:", error);
      }
    },
    logout: async () => {
      try {
        set({ user: null });
        await AsyncStorage.removeItem("user-info");
      } catch (error) {
        console.error("Error removing user info:", error);
      }
    },
    setUser: async (user) => {
      try {
        set({ user });
        await AsyncStorage.setItem("user-info", JSON.stringify(user));
      } catch (error) {
        console.error("Error saving user info:", error);
      }
    },
}));

(async () => {
  const userInfo = await getUserInfoFromStorage();
  useAuthStore.setState({ user: userInfo }); 
})();

export default useAuthStore; 