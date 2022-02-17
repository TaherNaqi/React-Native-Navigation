import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import authStore from "./authStore";
class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];
  fetchCart = async () => {
    const cart = await AsyncStorage.getItem("myCart");
    this.items = cart ? JSON.parse(cart) : [];
  };
  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.product._id === newItem.product._id
    );
    if (foundItem) foundItem.quantity = newItem.quantity;
    else this.items.push(newItem);
    console.log("add", this.items);
    const jsonValue = JSON.stringify(this.items);
    await AsyncStorage.setItem("myCart", jsonValue);
  };
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
  //   get totalPrice() {
  //     let total = 0;
  //     this.items.forEach((item) => (total += item.quantity * item.price));
  //     return total;
  //   }

  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  checkout = async () => {
    try {
      const orders = this.items.map((order) => {
        return {
          ...order,
          product: order.product._id,
        };
      });
      const res = await api.post("/checkout", { order: orders });
      this.items = [];
      await AsyncStorage.removeItem("myCart");
    } catch (error) {
      console.log(error);
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
