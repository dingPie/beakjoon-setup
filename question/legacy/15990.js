// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.slice(1).map((v) => Number(v));
const max = Math.max(...numbers);

const dp = {
  1: [1, 0, 0], // 각 1, 2, 3을고 끝나는 수가 몇개인지. 이걸 reduce로 합치면 총 갯수가 된다.
  2: [0, 1, 0],
  3: [1, 1, 1], // 12 21
};

for (let i = 4; i <= max; i++) {
  const one = (dp[i - 1][1] + dp[i - 1][2]) % 1000000009;
  const two = (dp[i - 2][0] + dp[i - 2][2]) % 1000000009;
  const three = (dp[i - 3][0] + dp[i - 3][1]) % 1000000009;

  dp[i] = [one, two, three];
}
const answer = numbers.map(
  (v) => dp[v].reduce((a, c) => a + c, 0) % 1000000009
);

console.log(answer.join("\n"));
// 각 자릿수를 특정 숫자로 끝나는걸..따로 기록해서..
// 결과에선 index를 더해서.

// 대체 패턴이 뭐지..
// 3으로 나눴을 때 몫으로 뭐가 있는듯 한데... ( 10은 27)
// 일단..
// 1 -> 3**0 +1
// 4 -> 3**1,
// 7 -> 3**2
// 10 -> 3**3

// 3은?
// 2 1
// 1 2
// 3

// 4?
// 1 2 1
// 3 1
// 1 3

// 5 ?
// 2 1 2
// 1 3 1
// 2 3
// 3 2

// 6
// 2 1 2 1
// 1 2 1 2
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

// 7
// 1 2 1 2 1
// 1 2 3 1
// 1 3 2 1
// 2 1 3 1
// 3 1 2 1
// 1 2 1 3
// 1 3 1 2
// 3 1 3
// 2 3 2

// 8

// 2 1 2 1 2

// 1 2 3 2
// 2 1 3 2
// 2 1 3 2

// 2 3 1 2
// 2 3 1 2
// 2 3 2 1

// 1 3 1 3
// 3 1 3 1
// 3 2 3

// const arr = [1, 2, 3];
// const TARGET = 7;
// let tt = 0;
// const test = (arr, num, picked = []) => {
//   arr.forEach((v, i) => {
//     if (picked.at(-1) !== v && num > v) test(arr, num - v, [...picked, v]);
//     else if (num === v && picked.at(-1) !== v) {
//       // console.log(num, v, [...picked, v]);
//       tt++;
//     }
//   });
// };
// test(arr, TARGET);
// console.log("tt", tt);

// const testArr = Array(16)
//   .fill(0)
//   .map((_, i) => i + 1);

// const ttt = testArr.map((v) => {
//   let value = 0;
//   const test = (arr, num, picked = []) => {
//     arr.forEach((v, i) => {
//       if (picked.at(-1) !== v && num > v) test(arr, num - v, [...picked, v]);
//       else if (num === v && picked.at(-1) !== v) {
//         // console.log(num, v, [...picked, v]);
//         value++;
//       }
//     });
//   };
//   test([1, 2, 3], v);
//   return { [v]: value };
// });
// console.log(ttt);
