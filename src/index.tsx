import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { hoge, test } from "./module";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  console.log("start");
  await wait(2000);
  console.log("end");
})(); // polyfill test

const foo = {
  bar: undefined,
};

console.log(foo?.bar); // tsconfig test

console.log({ hoge });
console.log({ test });
