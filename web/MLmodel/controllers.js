import axios from "axios";

class controller {
  static getAlldishes() {
    axios.get("localhost:4000/menu/all").then((response) => {
      console.log(response.data);
    });
  }
  static getPopularDishes() {}
  static getDishesByTypeName(type) {}
  static getDishesByPlaceName(place) {}
  static getDishesByTaste(taste) {}
  static getWaitingTime(username, orderId) {}
  static placeOrder(dishname, quantity) {}
  static calculateBill(username) {}
  static checkoutPayBill(username) {}
}
