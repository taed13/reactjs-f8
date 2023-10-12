import { createStore } from "https://cdn.skypack.dev/redux";

const initState = 0;

//reducer
function reducer(state = 0, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
}

// create store
const store = (window.store = createStore(reducer));

//actions
function actionDeposit(payload) {
  return {
    type: "DEPOSIT",
    payload,
  };
}

function actionWithdraw(payload) {
  return {
    type: "WITHDRAW",
    payload,
  };
}

// DOM events
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

// event handler
deposit.onclick = function () {
  store.dispatch(actionDeposit(10));
};

withdraw.onclick = function () {
  store.dispatch(actionWithdraw(10));
};

//listen to store changes
store.subscribe(() => {
  console.log("State changed");
  render();
});

// render
function render() {
  const output = document.querySelector("#output");
  output.innerText = store.getState();
}

render();
