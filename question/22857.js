// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [cnt, k] = input[0].split(" ").map((v) => Number(v));
const numbers = input[1].split(" ").map((v) => Number(v));

let answer = 0;
let sIdx = 0;
let eIdx = 0;
let sum = 0;
let jump = k;

if (cnt === 1) {
  const answer = numbers[0] % 2 === 0 ? 1 : 0;
  console.log(answer);
  return;
}

while (sIdx < cnt - 1 || eIdx < cnt - 1) {
  if (jump >= 0) {
    // 점프 가능할 때
    if (numbers[eIdx] % 2 === 0) {
      sum += 1;
    } else {
      jump -= 1;
    }
    eIdx++;
  } else {
    // 점푸 불가능 할 때
    while (numbers[sIdx] % 2 === 0) {
      sIdx += 1;
      sum -= 1;
    }
    sIdx += 1;
    jump += 1;
  }

  if (sum > answer) answer = sum;
}

console.log(answer);

// 삭제할 수 있는 횟수는 '최대' k, 다 삭제하지 않아도 된다.
// k를 다 소진했으면 삭제가 불가능하다. 이 때 어떻게 처리해야되지?

// 해당 조건으로 했을 때 최고값..?
// 아 k가 없을때 앞에 인덱스를 옮기자.

// 아 중간에... jump못해서 캔슬났을 경우 ..같은거 좀 더 생각해보자.....

// 걍 틀림.

// 이거 시작부분을 어케 잡냐가 포인트네.
// 데려가지 않을거면 deleted를 깎을 필요 없지?
// 그럼 dp에서 얼마나 삭제했는 지 값도 갖고있어야 하나?
