// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const arr = input.split("");

// A+B-C*(D+(E-F)+(G*F+(I-J))/K+L-(M-N)+N)+O-(P-Q)+R
// A+B-C*(D+(E-F)+(G*F+IJ-))/K+L-(M-N)+N)+O-(P-Q)+R
while (arr.includes("(")) {
  const bracket = [];
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v === "(") {
      bracket.push(i);
    } else if (v === ")") {
      const start = bracket.pop();
      const [num1, exp, num2] = arr.slice(start + 1, i);
      const tt = num1 + num2 + exp;
      const range = i - start;
      arr.splice(start, range + 1, tt);
      i -= range;
    }
  }
}

// console.log(arr);

while (arr.includes("*") || arr.includes("/")) {
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v === "*" || v === "/") {
      const num1 = arr[i - 1];
      const exp = arr[i];
      const num2 = arr[i + 1];
      const tt = num1 + num2 + exp;
      arr.splice(i - 1, 3, tt);
      i -= 3;
    }
  }
}

while (arr.includes("+") || arr.includes("-")) {
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v === "+" || v === "-") {
      const num1 = arr[i - 1];
      const exp = arr[i];
      const num2 = arr[i + 1];
      const tt = num1 + num2 + exp;
      arr.splice(i - 1, 3, tt);
      i -= 3;
    }
  }
}

console.log(arr[0]);

// 시간초과가 나네...
