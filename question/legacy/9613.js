// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n").slice(1);

const answer = [];

const getGcd = (a, b) => {
  if (a % b === 0) return b;
  else return getGcd(b, a % b);
};

const getCombination = (arr) => {
  const result = [];

  arr.forEach((fix, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const ttt = rest.map((v) => getGcd(fix, v));
    // console.log(rest, ttt);
    result.push(...ttt);
  });
  return result;
};

for (let i = 0; i < input.length; i++) {
  const arr = input[i]
    .split(" ")
    .slice(1)
    .map((v) => Number(v));
  answer.push(getCombination(arr).reduce((a, c) => a + c, 0));
}

console.log(answer.join("\n"));
