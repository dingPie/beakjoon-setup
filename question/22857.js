// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [cnt, k] = input[0].split(" ").map((v) => Number(v));
const numbers = input[1].split(" ").map((v) => Number(v));

// console.log(cnt, k, numbers);

// 삭제할 수 있는 횟수는 '최대' k, 다 삭제하지 않아도 된다.
// k를 다 소진했으면 삭제가 불가능하다. 이 때 어떻게 처리해야되지?

// const dp = numbers.map((v) => (v % 2 === 0 ? 1 : 0));
const dp = numbers.map((v) => [v % 2 === 0 ? 1 : 0, k]);

let sIdx = 0; // 특정 조건에서 sIdx를 넘기면 될 것 같은데...

for (let i = 1; i < cnt; i++) {
  if (dp[i][0] >= dp[i - 1][0] && dp[i][1] <= dp[i - 1][1]) {
    sIdx = i;
    console.log("여기ㅏㅌㅁ", sIdx);
  }
  for (let j = sIdx; j < i; j++) {
    if (dp[i][1] <= 0) continue;
    // 해당 조건이 아니라면 무조건 건너뛰고 횟수를 소모하게 된다.
    // 아예 픽하지 않을때는...소모하지 않아도 되는데.
    // numbers[j] < numbers[i] &&
    if (dp[i][1] !== 0 && numbers[j] % 2 !== 0) {
      dp[i][1] -= 1;
    }

    if (
      //   numbers[j] < numbers[i] &&
      numbers[j] % 2 === 0 &&
      dp[j][0] <= dp[i][0]
    ) {
      dp[i][1] = dp[j][1];
      dp[i][0] = dp[j][0] + 1;
    }
  }
  console.log(dp);
}

// 시작 포인트 j를 어떻게 지정할까?

const arr = dp.map((v) => v[0]);
const answer = Math.max(...arr);

console.log(answer);

// 이거 시작부분을 어케 잡냐가 포인트네.
// 데려가지 않을거면 deleted를 깎을 필요 없지?
// 그럼 dp에서 얼마나 삭제했는 지 값도 갖고있어야 하나?
