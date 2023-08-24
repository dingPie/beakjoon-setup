// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const n = Number(input);

const tree = {
  0: [1, 2],
  1: [0, 2, 3],
  2: [0, 1, 3, 4],
  3: [1, 2, 4, 5],
  4: [2, 3, 5, 6],
  5: [3, 4, 7],
  6: [4, 7],
  7: [5, 6],
};

const dp = {
  0: [1, 0, 0, 0, 0, 0, 0, 0],
};

for (let i = 1; i <= n; i++) {
  const prev = dp[i - 1];
  const curr = Array(8).fill(0);

  prev.forEach((val, idx) => {
    tree[idx].forEach((v) => (curr[v] += val));
  });

  dp[i] = curr.map((v) => v % 1000000007);
}

console.log(dp[n][0]);

// const tt = {
//   정보대: 0,
//   1: 1,
//   미래관: 1,
//   신앙관: 2,
//   한경직기념관: 2,
//   진리관: 3,
//   형남공학관: 3,
//   학생회관: 4,
// };

// const t = [1, 1, 2, 2, 3, 3, 4];

// const dp = {
//   1: 0,
// };

// for (let i = 2; i <= n; i++) {
//   let need = ["정보대"];
//   let result = 0;

//   for (let j = 1; j < i; j++) {
//     const newNeed = [];
//     need.forEach((pos) => {
//       tree[pos].forEach((pos) => {
//         newNeed.push(pos);
//       });
//     });
//     need = newNeed;

//     need.forEach((v) => {
//       if (tt[v] === i - j) result += 1;
//     });
//   }

//   dp[i] = result % 1000000007;
// }

// console.log(dp);
