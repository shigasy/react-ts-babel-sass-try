import { hoge, test } from "index";
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  console.log("start");
  await wait(2000);
  console.log("end");
})(); // polyfill test

const foo = {
  bar: undefined,
};

console.log(foo?.bar) // tsconfig test

console.log({ hoge });
console.log({ test });
