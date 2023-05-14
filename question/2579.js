// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const stairs = input.map((v, i) => (i === 0 ? 0 : Number(v)));

console.log(stairs);
let idx = stairs.length - 2;

console.log(idx);

let answer = stairs.at(-1);
while (idx > 0) {
  const min = Math.min(stairs[idx], stairs[idx - 1], stairs[idx - 2]);
}

// 연속된 계단을 3개 밟을 수 없다.
// 그럼 시작한 게단부터? (혹은 완료 게단부터) 3번 계단까지의 값을 전부 확인후? 가장 높은값?
// 밟았을떄 / 안밟았을때를 따져야 하는데..이건 미래의 값이잖아.
// 그럼 아예 모두 더한 값에서 빼가는건?

// 이전 값들이 완전히 초기화되는건 3개인가?
// 꼭 밟아야하는 칸들이 처음~끝말고 있는가?

// 결국 기준칸으로부터 총 3칸중 한칸을 포기하게 됨.

// 한칸 전, 한칸 앞은 영향을 미친다.
// 두칸앞은 영향을 미치나?

// 10 20 15 10 25 20
