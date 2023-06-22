// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const n = Number(input);

const dp = {
  1: 9,
};

const tri = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
};

// 0 1 1 1 3 4 5
// 0 1 2 3 6 10 15?

for (let i = 2; i <= n; i++) {
  if (!tri[i]) tri[i] = tri[i - 1] + i - 2; // 이거 로직 수정해야 함....
  dp[i] = dp[i - 1] * 2 - tri[i];
}

console.log(dp[n]);

// bigint?

// 3 4 4 4..
// 6 7 8....
//

// 1 -> 9 (9 - 0)
// 2 -> 17 (18 - 1)
// 3 -> 32 (34 - 2)
// 4 -> 61 (64 - 3)
// 5 -> 116 (122 - 6)
// 6 -> 222 (232 - 10)

// 1 -> 1 ~ 9

const getCombi = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fix, idx, origin) => {
    // const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const combi = getCombi(arr, n - 1);
    const attached = combi.map((v) => [fix, ...v]);
    result.push(...attached);
  });

  return result;
};

const arr = Array(10)
  .fill(0)
  .map((_, i) => i);

const checkStair = (arr) => {
  const t = [];
  for (let i = 0; i < arr.length; i++) {
    let isSuccess = true;
    for (let j = 0; j < arr[i].length - 1; j++) {
      if (Math.abs(arr[i][j] - arr[i][j + 1]) !== 1) {
        isSuccess = false;
        break;
      }
    }
    if (isSuccess) {
      t.push(arr[i].join(""));
    }
  }
  return t.filter((v) => v[0] !== "0");
};

Array(6)
  .fill(0)
  .map((_, i) => i + 1)
  .forEach((n) => {
    const tt = getCombi(arr, n);
    const ttt = checkStair(tt);
    console.log(ttt.length);
  });

// 여기 이상으론 callstack 에러. (10 ** n만큼 호출하기 떄문)
// 삼각함수 비슷한것도 아니니까.. 한번 봐야지.
