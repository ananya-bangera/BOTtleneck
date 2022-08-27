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
  if (
    value == 56 ||
    value == 62 ||
    value == 89 ||
    value == 93 ||
    value == 120 ||
    value == 118 ||
    value == 43 ||
    value == 78 ||
    value == 125
  ) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Order is Successfully Placed! Wait few minutes.";
      chats.appendChild(newElem);
      chats.scrollBy(0, 450);
    }, 2000);
  } else if (value.includes("time")) {
    setTimeout(() => {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = `currently the time is: ${hours}:${minutes}:${seconds}<div>I hope you are having good time</div>`;
      chats.appendChild(newElem);
      chats.scrollBy(0, 450);
    }, 2000);
  }
  //
  else if (value.includes("menu")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML =
        "Following is the menu served at our restaurant: \n\n";
      let string = "";
      controller.getAlldishes().then((data) => {
        const results = data.data;
        for (i of results) {
          string += `<div class="menu"><span>${i.id}  ${i.name}</span><span>${i.price}.00</span></div>`;
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 450);
      });
    }, 2000);
  }
  //
  else if (value.includes("popular") && value.includes("starters")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Here is what you want: \n\n";
      let string = "";
      controller.getPopularDishes().then((data) => {
        const results = data.data;
        for (i of results) {
          if (i.type.includes("starter")) {
            string += `<div class="menu"><span>${i.id} ${i.name} </span><span>${i.price}.00</span></div>`;
          }
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 450);
      });
    }, 2000);
  } else if (value.includes("spicy") && value.includes("curry")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Here is what you want: \n\n";
      let string = "";
      controller.getAlldishes().then((data) => {
        const results = data.data;
        for (i of results) {
          if (i.type.includes("curry") && i.taste.includes("spicy")) {
            string += `<div class="menu"><span>${i.id} ${i.name}</span><span>${i.price}.00</span></div>`;
          }
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 450);
      });
    }, 2000);
  } else if (value.includes("roti")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Here is what you want: \n\n";
      let string = "";
      controller.getAlldishes().then((data) => {
        const results = data.data;
        for (i of results) {
          if (i.type.includes("roti")) {
            string += `<div class="menu"><span>${i.id} ${i.name}</span><span>${i.price}.00</span></div>`;
          }
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 450);
      });
    }, 2000);
  }
  //
  else if (
    value.includes("rice") &&
    value.includes("indian") &&
    value.includes("rice")
  ) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Here is what you want: \n\n";
      let string = "";
      controller.getAlldishes().then((data) => {
        const results = data.data;
        for (i of results) {
          if (
            i.type.includes("rice") &&
            i.taste.includes("spicy") &&
            i.type.includes("rice")
          ) {
            string += `<div class="menu"><span>${i.id} ${i.name} </span><span>${i.price}.00</span></div>`;
          }
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 450);
      });
    }, 2000);
  } else if (value.includes("popular") && value.includes("desert")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Here are some delicious deserts: \n\n";
      let string = "";
      controller.getPopularDishes().then((data) => {
        const results = data.data;
        for (i of results) {
          if (i.type.includes("desert")) {
            string += `<div class="menu"><span>${i.id} ${i.name}</span><span>${i.price}.00</span></div>`;
          }
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 450);
      });
    }, 2000);
  } else if (value.includes("drink")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML = "Here is what you would like to drink: \n\n";
      let string = "";
      controller.getAlldishes().then((data) => {
        const results = data.data;
        for (i of results) {
          if (i.type.includes("drink")) {
            string += `<div class="menu"><span>${i.id} ${i.name}</span><span>${i.price}.00</span></div>`;
          }
        }
        newElem.innerHTML += string;
        chats.appendChild(newElem);
        chats.scrollBy(0, 450);
      });
    }, 2000);
  } else if (value.includes("place") && value.includes("order")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML =
        "Just find dish serial number from menu and type only serial number in chat to place an order!";
      chats.appendChild(newElem);
      chats.scrollBy(0, 250);
    }, 2000);
  } else if (value.includes("checkout")) {
    setTimeout(() => {
      const newElem = document.createElement("p");
      newElem.classList.add("bot");
      newElem.innerHTML =
        "Total amount to be paid is: 775.00 Rupees only! <div>We hope you enjoyed our food today!</div>";
      chats.appendChild(newElem);
      chats.scrollBy(0, 450);
    }, 2000);
  } else if (
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
