// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

// 홀수 -> 짝수에선 +1, 짝수 -> 홀수에선 -1
const find = (num) => {
  let answer = 1n;
  for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) answer = answer * 2n + 1n;
    else answer = answer * 2n - 1n;
  }

  return answer;
};

const answer = find(Number(input)) % 10007n;
console.log(Number(answer));
