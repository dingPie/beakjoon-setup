// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const arr = input.slice(1).map((v) => Number(v));
arr.sort((a, b) => a - b);

let answer = 4;

for (let i = 0; i < cnt; i++) {
  let j = i + 1;
  let t = 4;
  while (arr[j] && arr[i] + 4 >= arr[j]) {
    j++;
    t--;
  }

  if (t < answer) answer = t;
  if (t === 0) break;
}
console.log(answer);
// 각 시작점부터 시작
// 다음 수가 시작점 +4 이하인지
// 이 갯수만큼 answer에서 빼주고..
