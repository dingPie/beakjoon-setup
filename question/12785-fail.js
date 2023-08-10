// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const mod = 1_000_007;

const [x, y] = input[0].split(" ").map((v) => Number(v));
const [tx, ty] = input[1].split(" ").map((v) => Number(v));

// 위 아래를 뒤집어야함.

const dp1 = Array(ty)
  .fill(0)
  .map((v) => Array(tx).fill(0));

for (let i = 0; i < ty; i++) {
  for (let j = 0; j < tx; j++) {
    if (i === 0 && j === 0) continue;
    else if (i === 0 || j === 0) dp1[i][j] = 1;
    else {
      dp1[i][j] = (dp1[i - 1][j] + dp1[i][j - 1]) % mod;
    }
  }
}

const a1 = dp1[ty - 1][tx - 1];

const dy = y - ty + 1;
const dx = x - tx + 1;

if (dy === 1 || dx === 1) {
  console.log(a1);
  return;
}

const dp2 = Array(dy)
  .fill(0)
  .map((v) => Array(dx).fill(0));

for (let i = 0; i < dy; i++) {
  for (let j = 0; j < dx; j++) {
    if (i === 0 && j === 0) continue;
    else if (i === 0 || j === 0) dp2[i][j] = 1;
    else {
      dp2[i][j] = (dp2[i - 1][j] + dp2[i][j - 1]) % mod;
    }
  }
}
const a2 = dp2[dy - 1][dx - 1];

console.log([x, y], [tx, ty], [dx, dy]);

console.log(dp1, dp2);

console.log(a1 * a2);

// 로직은 맞는것 같은데.
// 어디가 문젠지 확인해봐야 할 듯.

// 아니 왜 안돠냐...
