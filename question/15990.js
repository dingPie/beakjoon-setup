// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.slice(1).map((v) => Number(v));
const max = Math.max(...numbers);

const dp = {
  1: 1,
  2: 1,
  3: 3,
  4: 3,
  5: 4,
  6: 8,
  7: 9,
};

// 3은?
// 2 1
// 1 2
// 3

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

// 대체 패턴이 뭐지..
// 3으로 나눴을 때 몫으로 뭐가 있는듯 한데... ( 10은 27)
// 일단..
// 4 -> 3**1,
// 7 -> 3**2
// 10 -> 3**3
