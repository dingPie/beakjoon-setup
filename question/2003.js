// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [cnt, k] = input[0].split(" ").map((v) => Number(v));
const arr = input[1].split(" ").map((v) => Number(v));

let sIdx = 0;
let eIdx = 0;
let sum = 0;
let answer = 0;

while (sIdx < cnt) {
  if (sum === k) {
    answer++;
    sum += arr[eIdx];
    sum -= arr[sIdx];
    sIdx++;
    eIdx++;
  } else if (sum < k && eIdx < cnt) {
    sum += arr[eIdx];
    eIdx++;
  } else {
    // if (sum > k)
    sum -= arr[sIdx];
    sIdx++;
  }
}

console.log(answer);
