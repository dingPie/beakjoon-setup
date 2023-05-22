// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const getGcd = (a, b) => {
  if (a % b === 0) return b;
  else return getGcd(b, a % b);
};

const position = Number(input[0].split(" ")[1]);
const sisters = input[1].split(" ").map((v) => Number(v));

const dist = sisters.map((v) => Math.abs(v - position));

const answer = dist.reduce((a, c) => getGcd(a, c), dist[0]);
console.log(answer);

// 해당 동생 위치로 가려면... 차이만큼 움직여야 하고
// 모든 차이가 같으면 된다는거지?
// 모든 수의 최대공약수를 구하면 되지.
