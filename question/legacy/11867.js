// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const nums = input.map((v) => Number(v));

const max = Math.max(...nums);

const dp = {
  2: true,
  // 3: false,
  // 4: true,
  // 5: false,
};

for (let i = 3; i <= max; i++) {
  for (let j = 1; j <= i / 2; j++) {
    const arr = [i - j, j].filter((v) => v !== 1);
    const isWin = arr.every((v) => !dp[v]);

    if (isWin) {
      dp[i] = true;
      break;
    }
    if (dp[i] === undefined) dp[i] = false;
  }
}

const answer = nums.filter((v) => v !== 1);
const isWin = answer.every((v) => !dp[v]);
console.log(isWin ? "B" : "A");

//  사실 이렇게도 가능한듯 하다. (DP가 결국 홀/짝수로 결과가 나뉘거든.)
// const nums = input.map((v) => Number(v));

// const isWin = nums.every((v) => v % 2 === 1);
// console.log(isWin ? "B" : "A");

// 만약 6일 떄..
// 1, 5 / 3, 3
// B가 false -> a가 이김.
// 나눈 수가 둘다 이기는 경우만?

// 8 -> 1, 7 / 3, 5 / 4, 4

// 둘 중 큰 수까지 계속 찾아가야할듯?

// 5, a가 시작일떄
// a -> 1, 4
// b -> 1, 3
// a -> 1, 2
// b -> 1, 1

// 항상 큰쪽을 선택해야되나.. -> 2, 3ㅇ이면 작은쪽 선택하면 게임끝남.
// 아니.. 적절히 나눈다는게...대체 ...그럼 n,m 일 때 dp를 기록해야 되나?

// 1. 일단 두 돌중 하나라도 2가 있으면 해당 사람이 승리.
// 2. 그럼 나눌 떄 2를 안 만들고 나누면 된다.
// 3. 어떻게 해야 2를 피해서 나눌 수 있을까?
// 4. 큰 수와 작은 수 중 선택지가 있는데, 어떻게 해야 적절하게? 고를 수 있을까?...

// ex. 5, 8
// 5 -> 1, 4 ( 2, 3은 상대 승리하게 함.)
// 4 -> 1, 3 ( 2, 2은 상대 승리하게 함.)
// 3 -> 1, 2
// 2 -> 1, 1 승리.

// 8 -> 1, 7 / 3, 5 / 4, 4
// 7 -> 1, 6 / 3, 4
// 6 -> 1, 5 / 3, 3
// 5 -> 1, 4
// 4 -> 1, 3
// 3 -> 1, 2
// 2 -< 1, 1

// 오키 그럼 어차피 5부턴 선택지가 하나밖에 없고.
// 해당 수를 나눌 수 있으니까..

// 남은게 2면 상대가 이김.

// 5이하는 경우의 수가 1개밖에 나오지 않고.
// 6이상에서 경우의 수가 여러개 나올텐데, 이 중 승리할 수 ㄹ있는 경우의수를 뽑아야 함.
