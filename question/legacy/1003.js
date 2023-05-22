// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const nums = input.slice(1);

const f = { [-1]: 1, 0: 0 };

f[1] = 1;
f[2] = 1;
for (let i = 3; i <= Math.max(...nums); i++) {
  f[i] = f[i - 1] + f[i - 2];
}

const answer = nums.map((v) => `${f[v - 1]} ${f[v]}`);
console.log(answer.join("\n"));
