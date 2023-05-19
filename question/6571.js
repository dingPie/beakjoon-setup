// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const arr = input
  .slice(0, input.length - 1)
  .map((v, i) => v.split(" ").map((v) => Number(v)));

const answer = arr.map(([s, e]) => {
  if (s === 0) return 0;
  s = BigInt(s);
  e = BigInt(e);
  let prev = 1n;
  let curr = 1n;
  let count = 0;

  while (curr < s) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  while (curr <= e) {
    let next = prev + curr;
    prev = curr;
    curr = next;
    count++;
  }

  return count;
});

console.log(answer.join("\n"));

// console.log(max, arr);

// const f = [0n, 1n, 1n];
// console.log(arr.at(-2));

// for (let i = 3; i <= max; i++) {
//   f.push(f.at(-1) + f.at(-2));
// }
// console.log(f);
