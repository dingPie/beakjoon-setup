// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const k = Number(input[1]);
const arr = input[2].split(" ").map((v) => Number(v));
arr.sort((a, b) => a - b);

let answer = 0;
let sIdx = 0;
let eIdx = cnt - 1;

while (sIdx < eIdx) {
  if (arr[sIdx] + arr[eIdx] === k) {
    answer++;
    sIdx++;
    eIdx--;
  } else if (arr[sIdx] + arr[eIdx] > k) {
    eIdx--;
  } else if (arr[sIdx] + arr[eIdx] < k) {
    sIdx++;
  }
}

console.log(answer);
