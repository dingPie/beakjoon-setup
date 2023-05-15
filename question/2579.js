// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const stairs = input.map((v, i) => (i === 0 ? 0 : Number(v)));

console.log(stairs);
let idx = 0;
let method = 0;
// method === 0 ? 0 1 가능
// method === 1 ? 1 2 가능
// method === 2? 2만 가능 -> 이거 이상한데...
const picks = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

// 1 1 1 이 나오면 안되는건데.
// 가장 작은 것부터 지워나가는건..? -> 작은게 같으면 어떻게 되는거지?

// 해당 칸이 빈 값일때 dp 를 구할까?
// 1번이 비었을때 -> 0  (0)
// 2번이 비었을 때 -> 10  (0 + 1)
// 3번이 비었을 때 -> 10+20 (1 + 2)
// 4번이 비었을 때 -> 10 + 15 (1 + 3)
// 5번이 비었을때 -> 10 + 20 + 25 (1 + 2 + 4 -> 3 + 4)
// 6번이 비었을 때 -> 불가능, 꼭 밟아야함.
// ...이런식으로 DP 가 가능한가..?
