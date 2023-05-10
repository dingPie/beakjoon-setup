// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const bridges = input.slice(1);

const getFactorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const getCombi = (n, r) =>
  getFactorial(n) / (getFactorial(n - r) * getFactorial(r));

const answer = bridges.map((v) => {
  const [n, m] = v.split(" ").map((v) => Number(v));
  const result = getCombi(m, m - n);
  return Math.round(result);
});
console.log(answer.join("\n"));
// 조합..과 비슷한 문제같은데.
// M이 더 큼
// 다리가 다르진 않다.
// 두 수가 같다면 그게 최대치
