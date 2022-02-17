import { makeAutoObservable, configure } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
configure({
  enforceActions: "never",
});
class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signUp = async (user, navigation) => {
    try {
      const response = await api.post("/signup", user);
      this.setUser(response.data.token);
      navigation.navigate("CartList");
    } catch (error) {
      console.log(error);
    }
  };
  //   update = async (user) => {
  //     try {
  //       const response = await api.post("/update", user);
  //       this.user = response.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  signIn = async (user, navigation, toast) => {
    try {
      const response = await api.post("/signin", user);
      //   console.log(
      //     "🚀 ~ file: authStore.js ~ line 26 ~ AuthStore ~ signIn= ~ response",
      //     response.data
      //   );
      await this.setUser(response.data.token);
      navigation.goBack();
      // navigation.navigate("Home");
      toast.show({
        title: `Welcome back ${this.user.username}`,
        status: "success",
      });
    } catch (error) {
      toast.show({
        title: `invalid credentials`,
        status: "danger",
      });
    }
  };

  logout = async () => {
    this.user = null;
    delete api.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); //time right now
      let user = decode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        alert("Logged out, session expired");
        this.logout();
      }
    } else {
      this.logout();
    }
  };
}
const authStore = new AuthStore();
// authStore.checkForToken();

export default authStore;
