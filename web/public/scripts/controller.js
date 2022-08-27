class controller {
  static getAlldishes() {
    fetch("http://localhost:4000/menu/all")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  static getPopularDishes() {
    fetch("http://localhost:4000/menu/popular")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  static getDishesByTypeName(type) {
    fetch(`http://localhost:4000/menu/type/${type}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  static getDishesByPlaceName(place) {
    fetch(`http://localhost:4000/menu/place/${place}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  static getDishesByTaste(taste) {
    fetch(`http://localhost:4000/menu/taste/${taste}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  static getWaitingTime(username, orderId) {}
  static placeOrder(dishname, quantity) {}
  static calculateBill(username) {}
  static checkoutPayBill(username) {}
}
