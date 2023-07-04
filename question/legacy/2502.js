// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [d, num] = input.map((v) => Number(v));

const dp = {
  1: { a: 1, b: 0 },
  2: { a: 0, b: 1 },
};

for (let i = 3; i <= 30; i++) {
  dp[i] = { a: 0, b: 0 };
  dp[i].a = dp[i - 1].a + dp[i - 2].a;
  dp[i].b = dp[i - 1].b + dp[i - 2].b;
}

const target = dp[d];

const t = num - target.a;

for (let i = 1; i <= num; i++) {
  if ((num - i * target.a) % target.b === 0) {
    console.log(i);
    console.log((num - i * target.a) / target.b);
    return;
  }
}
