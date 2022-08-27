class controller {
  static getAlldishes() {
    return fetch("http://localhost:4000/menu/all").then((response) =>
      response.json()
    );
  }
  static getPopularDishes() {
    return fetch("http://localhost:4000/menu/popular").then((response) =>
      response.json()
    );
  }
  static getDishesByTypeName(type) {
    return fetch(`http://localhost:4000/menu/type/${type}`).then((response) =>
      response.json()
    );
  }
  static getDishesByPlaceName(place) {
    return fetch(`http://localhost:4000/menu/place/${place}`).then((response) =>
      response.json()
    );
  }
  static getDishesByTaste(taste) {
    return fetch(`http://localhost:4000/menu/taste/${taste}`).then((response) =>
      response.json()
    );
  }
  static getWaitingTime(username, orderId) {}
  static placeOrder(dishname, quantity) {}
  static calculateBill(username) {}
  static checkoutPayBill(username) {}
}

const send = document.getElementById("send");
const chats = document.getElementById("chats");
const tastes = ["spicy", "sweet", "bitter", "sour", "salty", "hot"];

function sendMessage() {
  const value = document.getElementById("message").value.trim();
  if (!value) {
    return;
  }

  const newElem = document.createElement("p");
  newElem.classList.add("client");
  newElem.innerHTML = value;
  chats.appendChild(newElem);
  document.getElementById("message").value = "";
  chats.scrollBy(0, 80);

  if (value.includes("menu")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML =
        "Following is the menu served at our restaurant: \n\n";
      let string = "";
      controller.getAlldishes().then((data) => {
        const results = data.data;
        for (i of results) {
          string += `<div class="menu"><span>${i.name}</span><span>${i.price}.00</span></div>`;
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 250);
      });
    }, 2000);
  }
  //
  else if (value.includes("popular")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Following are popular dishes: \n\n";
      let string = "";
      controller.getPopularDishes().then((data) => {
        const results = data.data;
        for (i of results) {
          string += `<div class="menu"><span>${i.name}</span><span>${i.price}.00</span></div>`;
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 250);
      });
    }, 2000);
  }
  //
  else if (
    value.includes("spicy") ||
    value.includes("sour") ||
    value.includes("bitter") ||
    value.includes("hot") ||
    value.includes("sweet") ||
    value.includes("salty")
  ) {
    setTimeout(() => {
      let valArray = value.split(" ");
      const tasteRequired = [];
      for (i of valArray) {
        if (tastes.includes(i)) {
          tasteRequired.push(i);
        }
      }
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Here is what you would like \n\n";
      let string = "";
      console.log(tasteRequired);
      controller.getAlldishes().then((data) => {
        const results = data.data;
        outer: for (i of results) {
          for (j of tasteRequired) {
            if (i.taste.includes(j)) {
              string += `<div class="menu"><span>${i.name}</span><span>${i.price}.00</span></div>`;
              continue outer;
            }
          }
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 80);
      });
    }, 2000);
  }
  //
  else if (value.includes("chinese")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Following are popular dishes: \n\n";
      let string = "";
      controller.getPopularDishes().then((data) => {
        const results = data.data;
        for (i of results) {
          string += `<div class="menu"><span>${i.name}</span><span>${i.price}.00</span></div>`;
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 250);
      });
    }, 2000);
  } else if (
    value.includes("how") &&
    value.includes("are") &&
    value.includes("you")
  ) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "I am fine!!";
      chats.appendChild(newElem);
      chats.scrollBy(0, 250);
    }, 2000);
  } else {
    const newElem = document.createElement("p");
    newElem.classList.add("bot");
    newElem.innerHTML = "We can't understand what you have written!";
    chats.appendChild(newElem);
  }
}

send.addEventListener("click", sendMessage);
controller.getAlldishes().then((data) => {
  const results = data.data;
  for (i of results) {
    console.log(i.name);
  }
});
