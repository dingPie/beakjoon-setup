// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let number = Number(input);

console.log("test", Math.abs(number).toString(2));

let answer = "";

const find = (num = 0, str = "", binaryIdx = 0) => {
  if (num === number) {
    answer = str;
    return str;
  }
  const target = binaryIdx % 2 === 0 ? 2 ** binaryIdx : -(2 ** binaryIdx);
  if (Math.abs(number * 4) < Math.abs(target)) return;

  const added = "1" + str;
  const skipped = "0" + str;

  find(num + target, added, binaryIdx + 1);
  find(num, skipped, binaryIdx + 1);
};

if (number % 2 === 0) find(0, "0", 1);
else find(1, "1", 1);

console.log(answer);

// -32 + 16 - 4 +2 + 1

// 이러면은...분석하는수밖에 없어.. 홀/짝숙 ㅏ

// 1,
// 110, 111, 100, 101,
// 11010, 11011, 11000, 11001, 11110, 11111, 11100, 11101 ...

// -2 -1 0 1
// 010 011 000 001

// DP를 이용해서? -> 이래도 똑같지않나?

// 자릿수를 먼저계산?

// -11에서 바뀐다.
// 11 10
// 1101 1101 1111 1110 1001 1000 1011 1010
// 110101 (11)
// 11010101 (43)

// -10 ? -> -8 -2

// -13 -> -32 + 19 (-32)
// 19? -> 16 + 3 (16)
// 3? -> 8 - 5 (8)
// 3 ? 2 + 1

// 무슨 자릿수부터 할 지 알아야겠네 그럼

const getDigit = (num) => {
  if (num > 0) {
    let t = 1;
    let idx = 0;
    while (num > t) {
      idx += 2;
      t += 2 ** idx;
    }
    return idx + 1;
  } else {
    let t = -2;
    let idx = 1;
    while (num < t) {
      idx += 2;
      t -= 2 ** idx;
    }
    return idx + 1;
  }
};
// 총 길이를 구한다. 해당 digit 부터 하나씩 진행하면 된다.
// 처음은 무조건 1로, 그 이후 해당 cell에서 구하면 되는데.
const digit = getDigit(number);
console.log("자릿수", digit, number);

let answer2 = "1"; // 첫자리는 무조건 1
while (number !== 0) {
  break;
  // 0이 될 때 까지 진행
}
