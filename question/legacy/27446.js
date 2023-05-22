// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [total, _] = input[0].split(" ").map((v) => Number(v));
const papers = new Set(input[1].split(" ").map((v) => Number(v)));

const arr = Array(total).fill(false);

papers.forEach((v) => {
  arr[v - 1] = true;
});

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) continue;

  let last = i;
  for (let j = 1; j < 4; j++) {
    if (arr[last + j] === undefined) break;
    else if (!arr[last + j]) {
      last = last + j;
      j = 0;
    }
  }

  answer += (last - i + 1) * 2 + 5;
  i = last;
}

console.log(answer);
