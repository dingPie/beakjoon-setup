// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const t = input.filter((_, i) => i % 2 === 1).map((v) => Number(v));
const max = Math.max(...t);
const nums = [];
for (let i = 1; i < input.length; i += 2) {
  nums.push([input[i], input[i + 1]]);
}

const apt = {
  0: Array(14)
    .fill(0)
    .map((_, i) => i + 1),
};

for (let i = 1; i <= max; i++) {
  const layer = apt[i - 1];
  const arr = [layer[0]];
  for (let j = 1; j < layer.length; j++) {
    arr.push(layer[j] + arr.at(-1));
  }
  apt[i] = arr;
}

const answer = nums.map(([layer, num]) => apt[layer][num - 1]);
console.log(answer.join("\n"));

// a층 b호에서 살려면
// a-1층에 1호부터 b호까지의 사람의 수의 합만큼 데리고 살아야 함.

// 0층은 각각 1, 2, 3, 4..명이 살고있음.

// 그럼 가장 높은 층에 사는 사람만큼 다 구해놓을까.
