// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

let str = input[1];

const nums = input.slice(2);
const regex = /[\*\-\+\/]/;

const obj = {};
nums.forEach((v, i) => {
  obj[String.fromCharCode(65 + i)] = Number(v);
});

const arr = str.split("").map((v) => {
  if (regex.test(v)) return v;
  else return obj[v];
});

let i = 0;
while (arr.length !== 1) {
  if (!regex.test(arr[i])) {
    i++;
    continue;
  }
  const exp = arr[i];
  const num1 = arr[i - 2];
  const num2 = arr[i - 1];
  if (exp === "+") {
    arr.splice(i - 2, 3, num1 + num2);
  } else if (exp === "-") {
    arr.splice(i - 2, 3, num1 - num2);
  } else if (exp === "*") {
    arr.splice(i - 2, 3, num1 * num2);
  } else {
    arr.splice(i - 2, 3, num1 / num2);
  }
  i--;
}
console.log(arr[0].toFixed(2));

// 같은 수일때 체크해줘야함.
