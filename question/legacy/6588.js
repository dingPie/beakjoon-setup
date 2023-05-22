// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const answer = [];

const arr = Array(1000000)
  .fill(0)
  .map((_, i) => i);

for (let i = 2; i <= 1000; i++) {
  if (!i) continue;
  for (let j = i * 2; j <= 1000000; j += i) {
    if (arr[j]) arr[j] = false;
  }
}
arr[0] = false;
arr[1] = false;
arr[2] = false;

const obj = {};

const primes = arr.filter((v) => v);
primes.forEach((v) => {
  obj[v] = true;
});

for (let i = 0; i < input.length - 1; i++) {
  const num = Number(input[i]);
  let result = "Goldbach's conjecture is wrong.";

  let idx = 0;
  while (primes[idx] < num) {
    if (obj[primes[idx]] && obj[num - primes[idx]]) {
      result = `${num} = ${primes[idx]} + ${num - primes[idx]}`;
      break;
    }
    idx++;
  }
  answer.push(result);
}

console.log(answer.join("\n"));

// 일단 n/2까지 탐색해보면 되고
// 해당 홀수가 소수인지 아닌지 하나씩 판별하려면 오래걸릴 것 같은데,
// 이건 obj DP를 이용해야되나?
// 아니면 총 100만이니까, 100만 이전까지 솟수 목록을 작성해놓을까.
// 100만의 수를 배열로 하나. 객체로 하나 만들어서
// 뒤에서 부터 찾아간다음, 반대 수가 소수인지 obj로 검사?
