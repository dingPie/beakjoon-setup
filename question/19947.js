// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");
const [asset, period] = input;

const bank = {
  1: 1.05,
  3: 1.2,
  5: 1.35,
};

const bankObj = {
  1: [1.05],
  3: [1.2],
  5: [1.35],
};

const getMaxOrder = (num) => {
  let result = [];
  let max = 1;
  for (const key in bank) {
    if (bankObj[num - key]) {
      const red = bankObj[num - key].reduce((a, c) => a * c, 1);
      if (red * bankObj[key] > max) {
        max = red * bankObj[key];
        result = [...bankObj[key], ...bankObj[num - key]];
      }
    }
  }

  return result;
};

for (let i = 2; i <= 10; i++) {
  if (!bankObj[i]) {
    const maxOrder = getMaxOrder(i);
    bankObj[i] = maxOrder;
  }
}

const find = (arr) => {
  if (arr.length === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fix, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const newArr = find(rest);
    const compose = newArr.map((v) => [fix, ...v]);
    result.push(...compose);
  });
  return result;
};

const orders = find(bankObj[period]);

const incomes = orders.map((order) =>
  order.reduce((a, c) => Math.floor(a * c), asset)
);

console.log(Math.max(...incomes));
