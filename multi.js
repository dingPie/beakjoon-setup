// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const nums = input[1].split(" ").map((v) => Number(v));
const answer = [];

const stack = [];
for (let i = nums.length - 1; i >= 0; i--) {
  while (!!stack.length && stack.at(-1) <= nums[i]) {
    stack.pop();
  }
  if (!!stack.length) answer.push(stack.at(-1));
  else answer.push(-1);
  stack.push(nums[i]);
}

console.log(answer.reverse().join(" "));

// 1. stack의 맨 뒤부터 pop 해 가면서 현재 탐색하는 수보다 큰 수가 있는지 찾는다.
// 2. while 반복문을 이용하여 끝까지 찾는다.
// 3. 큰 수를 찾았다면 멈추고 그 수를 answer에 넣는다.
// 4. 큰 수가 없다면 -1을 answer에 넣는다.
// 5. 현재 수를 stack에 넣고 끝.
