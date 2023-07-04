// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);

const code = {
  0: "{}",
};

const decode = {
  "{}": 0,
};

for (let i = 1; i <= 15; i++) {
  let t = "{";
  for (let j = 0; j < i; j++) {
    t += `${code[j]}`;
    if (j !== i - 1) t += ",";
  }
  t += "}";
  code[i] = t;
  decode[t] = i;
}

const answer = [];

const arr = input.slice(1);

for (let i = 0; i < n; i++) {
  const t = decode[arr[i * 2]] + decode[arr[i * 2 + 1]];
  answer.push(code[t]);
}

console.log(answer.join("\n"));
