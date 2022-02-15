import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

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
  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    console.log(items);
    this.items = items ? JSON.parse(items) : [];
  };
  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  checkout = async () => {
    this.items = [];
    Alert("I'm a cute message");
    await AsyncStorage.removeItem("myCart");
    try {
      const items = this.items.map((item) => {
        return { ...item, product: item.product._id };
      });
      const res = await instance.post("/checkout", items);
      this.items = [];
      await AsyncStorage.removeItem("myCart");
    } catch (error) {
      console.log(error);
    }
  };
}

const cartStore = new CartStore();
// cartStore.fetchCart();
export default cartStore;
