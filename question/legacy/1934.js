// 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const answer = [];
const getGcd = (a, b) => {
  if (a % b === 0) return b;
  else return getGcd(b, a % b);
};

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map((v) => Number(v));
  const lcm = (a * b) / getGcd(a, b);
  answer.push(lcm);
}
console.log(answer.join("\n"));
