// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map((v) => Number(v));
let max = Math.max(...numbers);

// 짝수일 경우 -> 앞 뒤가 같아야 함.
// 홀수일 경우 -> 가운데를 제외한 앞 뒤가 같아야 함.
// 각 숫자별로 펠린드롬인지 계산하면 될듯?

const solution = (num) => {
  const dp = {
    1: 1,
    2: 2,
    3: 2,
  };
  for (let i = 4; i <= num; i++) {
    dp[i] = Array(Math.floor(i / 2))
      .fill(0)
      .map((_, i) => i + 1)
      .reduce((a, c) => a + c, 0);
  }

  return dp;
};

const tt = solution(max);

console.log(tt);

// 하 ㅅㅂ 모르겠따 .

// 0: 0
// 1: 1 -> 1
// 2: 2 11 -> 2
// 3: 3 111 -> 2
// 4: 4 1111 22 121 -> 4
// 5: 5 131 212 11111 -> 4
// 6: 6 141 33 222 11211 111111 -> 6
// 7: 7 1111111 151 232 11311 313  -> 6

// 8: 44 11111111, 2222, 121121, 323, 1112111, 242, 11411, 161 8

// 313 11111111 232 11311

// 가운데 1을 더하거나, 숫자 1을 추가하거나 둘 중 하나네.
// -> 이 기준을 알아야겠는데?
// -> 숫자중 가운데가 1인 홀수 길이의 값: 둘다 가능
// -> 숫자 길이가 짝수인 값: 가운데 1 추가만 가능
// -> 숫자가 홀수인 값 가운데에 1 더하기만 가능

// 가운데 놔두고 재귀식? -2씩?
// 6 -> 4 -> 2 / ?

// 현재값 1
// 그다음 -2의 dp
// 4, 1 + 2 + 1
// 5 1 + 2 + 1

// 6
// 4
// 2 1

const dp2 = {
  0: 1,
  1: 1,
  2: 2,
  3: 2,
  4: 4,
  5: 4,
  6: 7,
  7: 7,
  8: 10,
};
