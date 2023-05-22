// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const { log } = require("util");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input[1].split(" ").map((v) => Number(v));

let min = numbers[0];

const answer = numbers.map((num) => {
  if (min > num) {
    min = num;
  }
  return num - min;
});

console.log(Math.max(...answer));

// 가장 최대값이 아니라
// 최소 ~ 최대값을 찾아야 함.

// 그럼 매번 값을 갱신해가면서 갈까?
// 최소값으로부터?
