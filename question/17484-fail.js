// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const arr = input.slice(1).map((v) => v.split(" ").map((v) => [Number(v), -1]));
const [n, m] = input[0].split(" ").map((v) => Number(v));
const methods = [-1, 0, 1];
// console.log(arr);

console.log(arr);

//진짜모르겠다...
// 시작점

// 각 j부터 시작하는걸 고정값으로 두고 해볼까.

// console.log(arr);

// 갈 수 있는 방향중에 가장 작은 수를 택하자.
// 하나씩 더해가는 방식으로.

// 3방향 (또는 두방향) 중 하나로 갈 수 있고..
// 이전에 간 방향은 못간다. (그럼 같은 idx가 안되는 문제만은 아니네 또 .....)

// 특정 셀까지 찾다가 안되는건..빠꾸해야되나?

// i+1이랑 i+2까지 계산하는건?
//
