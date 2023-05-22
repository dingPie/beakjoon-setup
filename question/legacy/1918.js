const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const arr = input.split("");

const gerLeftIndex = (arr) => {
  const brackets = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ")") brackets.push(")");
    else if (arr[i] === "(") brackets.pop();
    if (!brackets.length) return i;
  }
  return 0;
};

const gerRightIndex = (arr) => {
  const brackets = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") brackets.push("(");
    else if (arr[i] === ")") brackets.pop();
    if (!brackets.length) return i + 3;
  }
  return arr.length + 1;
};

const setBracket = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*" || arr[i] === "/") {
      const leftIdx = gerLeftIndex(arr.slice(0, i));
      const rightIdx = gerRightIndex(arr.slice(i + 1));
      arr.splice(leftIdx, 0, "(");
      arr.splice(rightIdx + i, 0, ")");
      i += 2;
    }
  }
};
setBracket(arr); // * / 부호를 괄호로 묶어줌

const backword = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v === "*" || v === "/" || v === "+" || v === "-") {
      const num1 = arr[i - 1];
      const exp = arr[i];
      const num2 = arr[i + 1];
      const tt = num1 + num2 + exp;
      arr.splice(i - 1, 3, tt);
      i -= 3;
    }
  }
};

// 괄호 먼저 계산해주기
const bracket = [];
for (let i = 0; i < arr.length; i++) {
  const v = arr[i];
  if (v === "(") {
    bracket.push(i);
  } else if (v === ")") {
    const start = bracket.pop();
    const range = i - start;
    const target = arr.slice(start + 1, i);
    backword(target); // 원본 배열 자체를 재정렬
    arr.splice(start, range + 1, target.join(""));
    i -= range;
  }
}

// 괄호 계산이 끝난후 앞부터 다시 계산
backword(arr);

console.log(arr[0]);
