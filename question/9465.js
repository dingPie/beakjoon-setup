// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const raw = input.slice(1);

const arr = [];

for (let i = 1; i < raw.length; i += 3) {
  const r1 = raw[i].split(" ").map((v) => Number(v));
  const r2 = raw[i + 1].split(" ").map((v) => Number(v));
  arr.push([r1, r2]);
}

console.log(arr);

const answer = arr.map((v) => {
  const [r1, r2] = v;
  const sum1 = r1.reduce((a, c) => a + c, 0);
  const sum2 = r2.reduce((a, c) => a + c, 0);
  const total = sum1 + sum2;
  const t = [Array(r1.length).fill(total), Array(r1.length).fill(total)];
  console.log(total);
  console.log(t);

  // 이전 값을 어디서 가져오지 ...
  // 하 모르겠다 .
});

// 이거 원형 스티커 그거네

// 이제 dp를 써서 amp을 하면 되는데.
// 해당 셀을 뜯었을 때 최대값? 어떻게 찾아가지?

// 2차원의 dp...
// 잃는 값보다 큰지..?

// 1. 한 칸씩 없애가면서 최대값을 확인한다.
// 2. 한 칸씩 선택하면서 주번 값을 확인...

// 고르고 + 남은 값을 합산했을 때 큰 값?
