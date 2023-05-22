// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [futureRadix, myRadix] = input[0].split(" ").map((v) => Number(v));

const digits = input[2]
  .split(" ")
  .map((v) => Number(v))
  .reverse();

let number = 0;
for (let i = 0; i < digits.length; i++) {
  number += digits[i] * futureRadix ** i;
}

// 이거 영어 없이 숫자로만 이루어져서 그럼.

let idx = 0;
while (number > myRadix ** idx) {
  idx++;
}
idx--;

const answer = [];
while (idx > -1) {
  const 몫 = Math.floor(number / myRadix ** idx);
  answer.push(몫);
  number -= 몫 * myRadix ** idx;
  idx--;
}

console.log(answer.join(" "));
