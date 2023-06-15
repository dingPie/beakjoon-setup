// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [cnt, step] = input[0].split(" ").map((v) => Number(v));
const numbers = input[1].split(" ").map((v) => Number(v));

console.log("dddd", cnt, step, numbers);

// 빨간블럭만 많이 밟기

// 최적의 시작점.

const dp = Array(cnt).fill(1);

// 시작점 -> 투포인터
// 한번은 점프해서 이동 가능함!

let max = 0;
for (let s = 0; s < cnt - 1; s++) {
  let isJump = true;
  let reach = cnt;
  for (let i = s; i < cnt - 1; i++) {
    if (numbers[i] <= step) continue;
    else {
      if (isJump) {
        isJump = false;
        continue;
      } else {
        if (i - s > max) max = i - s;
        break;
      }
    }
  }
  if (cnt - s > max) max = cnt - s;
  console.log("다끝남", cnt - s);
}

console.log("end", max);
