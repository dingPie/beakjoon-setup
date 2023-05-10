// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();
const cost = Number(input);

const obj = {
  1: -1,
  2: 1,
  3: -1,
  4: 2,
  5: 1,
};

for (let i = 6; i <= cost; i++) {
  for (let j = 1; j <= 5; j++) {
    if (obj[i - j] !== -1 && obj[j] !== -1) {
      if (!obj[i] || obj[i] > obj[i - j] + obj[j]) obj[i] = obj[i - j] + obj[j];
    }
  }
  if (!obj[i]) obj[i] = -1;
}

console.log(obj[cost]);

// 힙같은걸 쓰는거 아닌거같고..
// 12345만으로? -> 가능. 어차피 이 이후의 모든건 중복이다.

// 해당 값이 최소인지 어떻게 알지?
// 이걸 다 하는건 비효율적이고..
// 중간에 끊는건 불가능한데..
