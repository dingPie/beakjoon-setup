// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let number = Number(input);

const answer = [];

const getEratos = (max) => {
  const arr = Array(max)
    .fill(0)
    .map((_, i) => i);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (!arr[i]) continue;
    for (let j = i * 2; j < max; j += i) arr[j] = false;
  }
  return arr;
};

const arr = Array(10000001)
  .fill(0)
  .map((_, i) => i);
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= Math.sqrt(10000001); i++) {
  if (!arr[i]) continue;
  for (let j = i * 2; j < 10000001; j += i) arr[j] = false;
}

const primes = arr.filter((v) => v);

while (number > 1) {
  for (let i = 0; i < primes.length; i++) {
    const prime = primes[i];
    while (number % prime === 0) {
      number = number / prime;
      answer.push(prime);
    }
  }
}

console.log(answer.join("\n"));
