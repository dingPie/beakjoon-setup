// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");

const input = fs.readFileSync(dir).toString().trim().split("\n");
const nums = input[1].split(" ").map((v) => Number(v));
const answer = [];
const stack = [];
const obj = {};

nums.forEach((v) => {
  if (!obj[v]) obj[v] = 1;
  else obj[v] += 1;
});

for (let i = nums.length - 1; i >= 0; i--) {
  while (!!stack?.length && obj[stack?.at(-1)] <= obj[nums[i]]) {
    stack.pop();
  }
  if (!!stack?.length) answer.push(stack.at(-1));
  else answer.push(-1);

  stack.push(nums[i]);
}

console.log(answer.reverse().join(" "));

// 오른쪽에 있으면서 수열 A에서 등장한 횟수가 F(Ai)보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 그러한 수가 없는 경우에 오등큰수는 -1이다.

// 오큰수랑 같은데
// obj로 횟수 관리도 해줘야 함.
// 아니네 등장만..관리.
