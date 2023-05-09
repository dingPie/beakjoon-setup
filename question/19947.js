// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const bank = {
  1: 1.05,
  3: 1.2,
  5: 1.35,
};

let [asset, period] = input;
const arr = [];
while (!!period) {
  if (period >= 5) {
    period -= 5;
    arr.push(5);
    // asset = Math.floor(asset * 1.35);
  } else if (period >= 3) {
    arr.push(3);
    period -= 3;
    // asset = Math.floor(asset * 1.2);
  } else {
    arr.push(1);
    period -= 1;
    // asset = Math.floor(asset * 1.05);
  }
}

const find = (arr) => {
  if (arr.length === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fix, idx, origin) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const test = find(rest);
    const compose = test.map((v) => [fix, ...v]);
    result.push(...compose);
  });
  return result;
};
const orders = find(arr);

const incomes = orders.map((order) =>
  order.reduce((a, c) => Math.floor(a * bank[c]), asset)
);

console.log(incomes);
console.log(Math.max(...incomes));

// 이거 왜이러냐...

// const test = 35252;
// console.log(Math.floor(Math.floor(Math.floor(test * 1.35) * 1.2) * 1.05));
// console.log(Math.floor(Math.floor(Math.floor(test * 1.2) * 1.2) * 1.2));
// console.log(1.2 ** 3);
// console.log(1.35 * 1.2 * 1.05);

// console.log(Math.floor(Math.floor(Math.floor(test * 1.35) * 1.05) * 1.05));
// console.log(Math.floor(Math.floor(Math.floor(test * 1.05) * 1.35) * 1.05));
// console.log(Math.floor(Math.floor(Math.floor(test * 1.05) * 1.05) * 1.35));

// 소숫점 버림
// 기간은 0부터 10까지
// 각 지점까지 계산했을때 최고의 금액을 모아서?
