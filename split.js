// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const range = Number(input[0]);
const num = Number(input[1]);

// 배열로 하면 너무 오래걸리지 않을까.
const arr = Array(Number(range) + 1)
  .fill(0)
  .map((_, i) => i);

const answer = [];

let idx = 0;

while (answer.length < range) {
  let cnt = num;
  while (!!cnt) {
    idx++;
    if (idx > arr.length) idx = 0;
    if (!arr[idx]) continue;
    cnt--;
  }
  answer.push(arr[idx]);
  arr[idx] = false;
}
console.log("<" + answer.join(", ") + ">");
