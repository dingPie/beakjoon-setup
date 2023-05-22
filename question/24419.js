// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");
const leng = Number(input[0]);
const board = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

let answer = 0;

const matrixPathRec = (board, i, j) => {
  if ((i < 0 && j < 0) || i < 0 || j < 0) {
    answer++;
    return 0; // # 코드1
  } else {
    return (
      board[i][j] +
      Math.max(matrixPathRec(board, i - 1, j), matrixPathRec(board, i, j - 1))
    );
  }
};

// 2 * 3 * 4 * 5 -> 120
// 1 * 3 * 4 * 5 -> 60
// 1 * 2 * 4 * 5 -> 40
// 1 * 2 * 3 * 5 -> 30
// 1 * 2 * 3 * 4 -> 24

matrixPathRec(board, leng - 1, leng - 1);

console.log(`${answer} ${leng ** 2}`);

// 이대로 하면 시간초과.
// 5 * 5 셀을 탐색할 때 252가 나오는 경우...어.
// 피보나치 는 아니고... 1*1부터 해봐야 할 듯.
