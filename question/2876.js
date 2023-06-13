// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dp = Array(cnt)
  .fill(0)
  .map((v) => Array(5).fill(0));

dp[0][numbers[0][0] - 1] += 1;
dp[0][numbers[0][1] - 1] += 1;

for (let i = 1; i < cnt; i++) {
  const [a, b] = numbers[i];
  dp[i][a - 1] = dp[i - 1][a - 1] + 1;
  dp[i][b - 1] = dp[i - 1][b - 1] + 1;
}

let maxCnt = 0;
let minGrade = 5;

dp.forEach((v) => {
  for (let i = v.length - 1; i >= 0; i--) {
    if (maxCnt < v[i]) maxCnt = v[i];
    minGrade = i + 1;
  }
});

console.log(`${maxCnt} ${minGrade}`);

// 왜틀려 ㅅㅂ

// const dp = Array(cnt)
//   .fill(0)
//   .map((v) => [
//     { count: 1, grade: -1 },
//     { count: 1, grade: -1 },
//   ]);

// dp[0][0].grade = numbers[0][0];
// dp[0][1].grade = numbers[0][1];

// for (let i = 1; i < cnt; i++) {
//   const [a, b] = numbers[i];

//   if (a === dp[i - 1][0].grade) {
//     dp[i][0].grade = dp[i - 1][0].grade;
//     dp[i][0].count = dp[i - 1][0].count + 1;
//   }
//   if (a === dp[i - 1][1].grade) {
//     dp[i][1].grade = dp[i - 1][1].grade;
//     dp[i][1].count = dp[i - 1][1].count + 1;
//     console.log("여기 /?", dp[i]);
//   }
//   if (a !== dp[i - 1][0].grade && a !== dp[i - 1][1].grade) {
//     dp[i][0].grade = a;
//     dp[i][0].count = 1;
//   }

//   if (b === dp[i - 1][0].grade) {
//     dp[i][0].grade = dp[i - 1][0].grade;
//     dp[i][0].count = dp[i - 1][0].count + 1;
//   }
//   if (b === dp[i - 1][1].grade) {
//     dp[i][1].grade = dp[i - 1][1].grade;
//     dp[i][1].count = dp[i - 1][1].count + 1;
//     console.log("여기 /?", dp[i]);
//   }
//   if (b !== dp[i - 1][0].grade && b !== dp[i - 1][1].grade) {
//     dp[i][1].grade = b;
//     dp[i][1].count = 1;
//   }
// }

// let maxCnt = 0;
// let minGrade = 5;
// dp.forEach((v) => {
//   if (v[0].count > maxCnt) {
//     maxCnt = v[0].count;
//     minGrade = v[0].grade;
//   } else if (v[0].count === maxCnt && v[0].grade < minGrade) {
//     minGrade = v[0].grade;
//   }
//   if (v[1].count > maxCnt) {
//     maxCnt = v[1].count;
//     minGrade = v[1].grade;
//   } else if (v[1].count === maxCnt && v[1].grade < minGrade) {
//     minGrade = v[1].grade;
//   }
// });
// console.log(dp);
// console.log(`${maxCnt} ${minGrade}`);

// const dp = Array(cnt)
//   .fill(0)
//   .map((v) => [1, 5]);

// for (let i = 0; i < cnt; i++) {
//   const [a, b] = numbers[i]; // a, b case 둘 다 해야함.
//   for (let j = i + 1; j < cnt; j++) {
//     if (!numbers[j].includes(a)) {
//       if (dp[i][0] < j - i) {
//         dp[i][0] = j - i;
//         if (dp[i][1] > a) dp[i][1] = a;
//       }
//       break;
//     }
//   }

//   for (let j = i + 1; j < cnt; j++) {
//     if (!numbers[j].includes(b)) {
//       if (dp[i][0] < j - i) {
//         dp[i][0] = j - i;
//         if (dp[i][1] > b) dp[i][1] = b;
//       }
//       break;
//     }
//   }
// }

// // 여긴 맞는것같고.
// dp.sort((a, b) => {
//   if (b[0] === a[0]) {
//     return a[1] - b[1];
//   } else {
//     return b[0] - a[0];
//   }
// });
// console.log(dp[0].join(" "));

// dp를 4개를 기록해서 할까?
// 긴거 or 작은걸로 a, b를 대체해가는식으로 기록

// [2, 1, 1, 1]
// [2, 2, 3, 1]
// [5, 1, 3, 1]
// [5, 2, 2, 2]

// 일렬로 늘어진 책상 중 두 책상을 선택, 그럼 그 책상과 그 사이에 있는 학생들 중 한명을 지목하여 질문 (책상에는 두명씩 앉아있다.)
// 근데 한가지 점수만 줄 수 있음. 결국 질문한 사람에게 모두 같은 점수를 주려고 함.

// grade가

// 특정 grade가 중간에 끊기면 안됨.
// 값이 같으면 낮은 점수(1이 낮음).

// 각 idx부터 가능할 때 까지 dp 실행?
