// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

// 이것도 dp를 이용해서 이전 값까지 합치면서
const cnt = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

const dp = Array(cnt).fill(0);

for (let i = 0; i < cnt; i++) {
  for (let j = i; j >= 0; j--) {
    // 설계부터 다시하자..ㅎ
  }
}

console.log(Math.max(...dp));
