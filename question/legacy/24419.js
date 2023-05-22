// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const leng = Number(input[0]);

const board = Array(leng)
  .fill(0)
  .map((v, i) =>
    Array(leng)
      .fill(false)
      .map((_, idx) => {
        if (idx === 0) return i + 2;
        else if (i === 0) return idx + 2;
        else return 0;
      })
  );

for (let i = 1; i < leng; i++) {
  for (let j = 1; j < leng; j++) {
    board[i][j] = (board[i - 1][j] + board[i][j - 1]) % 1000000007;
  }
}

console.log(`${board[leng - 1][leng - 1]} ${leng ** 2}`);

// 1*1 -> 2
// 1*2 -> 3
// 1*3 -> 4
// 1*4 -> 5
// 1*5 -> 6

// 1*1 -> 2
// 2*1 -> 3 -> 1*1 + 1*2
// 2*2 -> 6 -> 1 + 2 + 3
// 2*3 -> 10 -> 1 + 2 + 3 + 4
// 2*4 -> 15
// 2*5 -> 21
// 3*5 -> 56
// 4*5 -> 126
// 5*5 -> 252

// 1 -> 2
// 2 -> 6
// 3 -> 20
// 4 -> 70
// 5 -> 252
// 6 -> 924

// 4*5 -> 4*4 + 3*5 ?
//5*5 -> 4 *5 + 5*4
//5*6 -> 5*5 + 4*6 -> 252 + 210 -> 462

// 그럼 일단 0,0 1,0, 0,1 1,1까지 채원놓고... 시작!
// 어떤 순서로 채워나가야 할까?
