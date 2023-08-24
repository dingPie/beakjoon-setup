// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map((v) => Number(v));

let count = 0;
let memo;
for (let i = 0; i < n - 1; i++) {
  if (count > 1) break;
  const [a, b] = [numbers[i], numbers[i + 1]];
  if (a > b) {
    count++;
    memo = i;
    // [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
    // i--;
  }
}

const sorted = (arr) => {
  for (let i = 0; i < n - 1; i++) {
    if (count > 1) break;
    const [a, b] = [arr[i], arr[i + 1]];
    if (a > b) {
      return false;
    }
  }
  return true;
};

if (count === 0) {
  console.log(n);
} else if (count > 1) {
  console.log(0);
} else if (count === 1) {
  const case1 = numbers.filter((v, i) => i !== memo);
  const case2 = numbers.filter((v, i) => i !== memo + 1);

  let answer = 0;
  if (sorted(case1)) answer++;
  if (sorted(case2)) answer++;
  console.log(answer);

  // 1이나 2를 처리해야 함. 둘 다 뺐을때 처리해보자.
}

// // 음수면 앞으로 뺌.

// 하나를 빼서. 오름차순으로 만듬.
// 1 2 2 이런것도 허용됨.
// 하나씩 가면서 검사하는 건 여려울 것 같은데.

// 하나 버려 만들 수 있는가 없는가가 중요하네?
// 정렬이 두번되면 -> 불가.
// 정렬이 한번되면 -> n-2
// 정렬이 안되면 -> n

// 비 내림차순 -> 내림차순 이 아니도록
