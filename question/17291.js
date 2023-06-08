// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const n = Number(input);

const dp = {
  0: 0,
  1: 1,
};

for (let i = 2; i <= n; i++) {
  let newBug = dp[i - 1] * 2;
  if (i - 3 > 0 && (i - 3) % 2 === 1) {
    const created = dp[i - 3] - dp[i - 4];
    newBug -= created;
    // console.log("홀수에 태어난 애들", created);
  }
  if (i - 4 > 0 && (i - 4) % 2 === 0) {
    const created = dp[i - 4] - dp[i - 5];
    // console.log("짝수에 태어난 애들", created);
    newBug -= created;
  }

  dp[i] = newBug;
}

console.log(dp);

// 일단...dp로 기록해서 n년차에 몇마리가 태어났는지 계산할 수 있다.
// 사망은 분열하고 -> 사망이라 수가 줄어들진 않는다.

// 맞는것같은데... 이전 구한 값에서 태어난 마릿수를 계산해주는 로직..그만큼 계산해서 죽이고..
