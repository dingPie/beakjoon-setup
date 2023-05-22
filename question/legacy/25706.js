// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const leng = Number(input[0]);
const jumps = input[1].split(" ").map((v) => Number(v));

const arr = Array(leng).fill(0);

for (let i = leng - 1; i >= 0; i--) {
  const jump = jumps[i] + 1;
  const value = !!arr[i + jump] ? arr[i + jump] : 0;
  arr[i] = value + 1;
}

console.log(arr.join(" "));

// 점프대... 읻단 다음 칸을 알아야 하니, 무조건 처음부터 시작하긴 해야함.
// 그다음 시작했으면

// 점프대가 없는 1번 칸의 답은 바로 다음 2번 칸의 답에 1을 더한 것과 같다.
//  높이 1의 점프대가 있는 2번 칸의 답은 한 칸을 건너뛴 4번 칸의 답에 1을 더한 것과 같다.

// 뒤부터? 기본적으로 이전값 +1씩 해가다가
// 해당 숫자 있으면 그만큼 idx 더해다가 + 1
