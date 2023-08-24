// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split("");

const isNext = (s, e) =>
  (s === "B" && e === "O") ||
  (s === "O" && e === "J") ||
  (s === "J" && e === "B");

const dfs = (arr) => {
  const need = [0];
  const obj = {};

  arr.forEach((v, i) => {
    obj[i] = Infinity;
  });
  obj[0] = 0;

  while (need.length) {
    const idx = need.shift();
    if (idx === arr.length - 1) continue;
    for (let i = idx + 1; i < arr.length; i++) {
      if (isNext(arr[idx], arr[i]) && obj[idx] + (i - idx) ** 2 < obj[i]) {
        need.push(i);
        obj[i] = obj[idx] + (i - idx) ** 2;
      }
    }
  }

  return obj;
};

const answer = dfs(arr);
console.log(answer[n - 1] === Infinity ? -1 : answer[n - 1]);

// const isNext = (s) => {
//   if (s === "B") return "O";
//   if (s === "O") return "J";
//   if (s === "J") return "B";
// };

// const dp = Array(n).fill(-1);

// for (let i = 1; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     // 여기 안에서 그 로직 돌려야 해..?
//   }
// }

// "B JBO JOJ OOJOB OOO"
// 9 9 25 9
// 25 9 16

// 아그럼 최대한 많은 칸을 밟는게 (점프를 적게하는게) 이득인거네?
// 에제는 111111...

// 그럼 그냥 쭉쭉 가면되고
// i가 끝에 닿거나
// n을 넘어가면 끝.

// ㅋㅋ 결국 밟을 수 있는 칸을 돌면서 다 찾아야 하네...
// i 칸 까지 가는 최소값을 구하면 될 것 같은데

// 그럼 j까지 진행하면서 최소값을 찾아야되나?
// 작큰수 스타일은 아닐수도?

// 현재 위치에서 밟을 수 있는 칸들을 뽑고
// 그 다음 칸을 밟았을 때 시나리오?
// 그럼 이건 어디서 dp가 활용되냐.
// 저 칸 하나가 가능하다고 해도.. 더 불가능한 케이스가 생길 수 있는데.

// 밟을 수 있는 칸이 1000개면 여기서 다 돌리는것도 말이 안됨.
// 끝까지 안가면 사실 전체 길이를 알기도 힘들고.. (진행한 cell 대비해서 하기에도 다 진행할 cell들이 다를테니까.)
