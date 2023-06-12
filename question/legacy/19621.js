// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);

const reserve = input.slice(1).map((v) => Number(v.split(" ").at(-1)));

const dp = Array(cnt).fill(0);
dp[0] = reserve[0];

for (let i = 1; i < cnt; i++) {
  // dp를 추가할 때 이전 항목과 절대 겹칠 수 없다.
  // 떄문에 이전dp, 2번 전의 dp, + 이번값 둘 중 큰걸로 넣으면 된다.
  const next = Math.max(
    dp[i - 1],
    (dp[i - 2] || 0) + reserve[i]
    // dp[i - 1] - reserve[i - 1] + reserve[i],
  );

  dp[i] = next;
  console.log(dp);
}

console.log(dp.at(-1));

// 회의가 앞 뒤로만 겹치고 다른 회의와는 겹치지 않는다. (정렬되어 온다.)
// 그럼 해당 회의를 선택할 때 / 선택하지 않을 때 조건을 나눠서 가능.

// 그럼 이건 시간이 아니라 앞/뒤의 칸 조건으로 검사하는게 맞겠는데.
// 해당 칸을 가졌을 때와 가지지 않았을 때?

// 이걸 선택하면.
// 이전꺼와 다음거를 포기해야 함.
// 그럼 둘 중 큰거?

// 계단오르기와 거의 흡사한듯.. 근데 왜 머리 안돌아감?

// 선택할 때 선택하지 않을 떄. 두개를 해야되나?
// max ?
