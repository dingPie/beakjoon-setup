// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

const obj = {
  1: 1,
  2: 2,
  3: 3,
};

for (let i = 4; i <= Number(input); i++) {
  const sqrt = Math.sqrt(i);
  if (sqrt === Math.floor(sqrt)) obj[i] = 1;
  else {
    // 제곱만 하면되지 않나? 어차피 1이랑은 다 있을테니까..
    for (let j = 1; j < Math.sqrt(i); j++) {
      if (!obj[i] || obj[i] > obj[j ** 2] + obj[i - j ** 2])
        obj[i] = obj[j ** 2] + obj[i - j ** 2];
    }
  }
}

console.log(obj[input]);

// 모든 자연수는 넷 혹은 그 이하의 제곱수의 합으로 표현
// N제곱이 아닌 무조건 2제곱.

// 아! 총 갯수가 아니라 최소갯수!
// 막 해보는건...맞는 방법이 아닌것같은데?

// 1 -> 1
// 2 -> 1 + 1
// 3 -> 1 + 1 + 1
// 4 -> 2
// 5 -> 2 + 1
// 6 -> 2 + 1 + 1
// 7 -> 2 + 1 + 1 + 1
// 8 -> 2 + 2
// 9 -> 3
// 10 -> 3 + 1
// 11 -> 3 + 1 + 1
// 12 -> 3 + 1 + 1 + 1 / 2 + 2 + 2
// 13 -> 3 + 2
// 14 -> 3 + 2 + 1
// 15 -> 3 + 2 + 1 + 1
// 16 -> 4
// 17 -> 4 + 1
// ...
// 12가 최소값인 3을 찾은 방법에 대해 알아야 함. -> 무조건 최대부터 빼는건 아닌듯함
// -> 시간초과
//

// 본인이 제곱이면 무조건 1.
// 더 짧을 때를 찾아가는게...오바네
// 그냥 되는거면 이전 dp 값 저장해서 더해가면 되는데.
