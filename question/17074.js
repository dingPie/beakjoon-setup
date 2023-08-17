// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));
console.log(numbers);

let count = 0;
numbers.sort((a, b) => {
  console.log(a, b);
  if (a < b) {
    count++;
    if (count > 1) return;
  }
  return a - b;
});
// 음수면 앞으로 뺌.

console.log(count, numbers);

// 하나를 빼서. 오름차순으로 만듬.
// 1 2 2 이런것도 허용됨.
// 하나씩 가면서 검사하는 건 여려울 것 같은데.

// 하나 버려 만들 수 있는가 없는가가 중요하네?
// 정렬이 두번되면 -> 불가.
// 정렬이 한번되면 -> n-2
// 정렬이 안되면 -> n
