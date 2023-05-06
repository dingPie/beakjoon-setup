// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const numbers = input.slice(1).map((v) => Number(v));

const primes = Array(1000001)
  .fill(0)
  .map((_, i) => i);

primes[0] = false;
primes[1] = false;

for (let i = 2; i <= Math.sqrt(1000000); i++) {
  if (!primes[i]) continue;
  for (let j = i * 2; j < 1000000; j += i) {
    primes[j] = false;
  }
}

const answer = [];

numbers.forEach((num) => {
  let result = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (primes[i] && primes[num - i]) result++;
  }
  answer.push(result);
});

console.log(answer.join("\n"));
