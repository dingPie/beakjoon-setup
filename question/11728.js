// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [aLength, bLength] = input[0].split(" ").map((v) => Number(v));
const aArr = input[1].split(" ").map((v) => Number(v));
const bArr = input[2].split(" ").map((v) => Number(v));

// const test = [...aArr, ...bArr].sort((a, b) => a - b);

// console.log(test.join(" "));

let aIdx = 0;
let bIdx = 0;

const arr = [];

while (aIdx < aLength || bIdx < bLength) {
  if (aIdx > aLength - 1) {
    arr.push(bArr[bIdx]);
    bIdx++;
  } else if (bIdx > bLength - 1) {
    arr.push(aArr[aIdx]);
    aIdx++;
  } else if (aArr[aIdx] < bArr[bIdx]) {
    arr.push(aArr[aIdx]);
    aIdx++;
  } else {
    arr.push(bArr[bIdx]);
    bIdx++;
  }
}

console.log(arr.join(" "));
