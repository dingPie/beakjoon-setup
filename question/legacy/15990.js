// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const a = [1, 2, 3];

const test = (goal) => {
  let answer = 0;
  const find = (goal, skip = -1, prev = 0) => {
    for (let i = 0; i < a.length; i++) {
      if (skip === i) continue;
      const v = a[i];
      if (prev + v < goal) {
        find(goal, i, prev + v);
      } else if (prev + v === goal) answer++;
    }
  };
  find(goal);
  return answer;
};

const test2 = (goal) => {
  let answer = 0;
  const find = (goal, skip = -1, prev = "") => {
    for (let i = 0; i < a.length; i++) {
      if (skip === i) continue;
      const v = a[i];
      if (prev.length + 1 < goal) {
        find(goal, i, prev + v.toString());
      } else if (prev.length + 1 === goal) answer++;
    }
  };
  find(goal);
  return answer;
};

const tt = Array(15)
  .fill(0)
  .map((_, i) => ({ [i + 1]: test(i + 1) }));

// 길이는 2개씩 더 붙일 수 있으니 3 * (2**i-1)이네
const ttt = Array(15)
  .fill(0)
  .map((_, i) => ({ [i + 1]: test2(i + 1) }));
console.log("ddd", tt);
console.log("ddd", ttt);

// 이렇게 탐색으로 풀면 1000만 되어ㅣ도 시간초과가 남.
// DP로 풀수있게끔 수정해야 하는데 상관관계를 모르겠네

// 두배를 할 수 있냐 못하냐.로 결졍.
// 앞/뒤에 1을 붙일수 있는가?
// 혹은 숫자 1을 증가시킬수 있는가? -> 근데 이렇게 증가시키면 또 중복날텐데?
// 길이가 N일때 만들 수 있는 값을 찾는게 빠른가?
