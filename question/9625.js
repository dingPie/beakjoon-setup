// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let str = "a";

for (let i = 0; i < Number(input); i++) {
  const newStr = str.split("").map((v) => (v === "a" ? "b" : "ba"));
  str = newStr.join("");
}

let aCount = 0;
let bCount = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") aCount++;
  else bCount++;
}

console.log(`${aCount} ${bCount}`);

// 버튼 한 번 눌렀을때 a -> b, b -> ba

// 이거 늘어나는 패턴 분석해서 다시해보자. (메모리 초과)
