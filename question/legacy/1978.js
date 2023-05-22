// 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const nums = input[1].split(" ").map((v) => Number(v));
let answer = 0;

const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

nums.forEach((v) => {
  if (isPrime(v)) answer++;
});

console.log(answer);
