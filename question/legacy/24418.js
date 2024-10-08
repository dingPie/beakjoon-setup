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

matrixPathRec(board, leng - 1, leng - 1);

console.log(`${answer} ${leng ** 2}`);

// 재귀랑 dp랑 시간정리.

// 일단 DP는 해당 값부터 하나씩 더해가면된다.

//matrixPath 에 인자를 두개 넘겨주는 문제 발생... 하. 암튼 이거 다시 보자.

// const matrix = Array(leng)
//   .fill(0)
//   .map(() => Array(leng).fill(0));

// for (let i = 0; i < leng; i++) {
//   for (let j = 0; j < leng; j++) {
//     if (!!matrix[i - 1] && !!matrix[i][j - 1]) {
//       matrix[i][j] = board[i][j] + Math.max(matrix[i - 1][j], matrix[i][j - 1]);
//     } else if (!matrix[i][j - 1] && !!matrix[i - 1]) {
//       matrix[i][j] = board[i][j] + matrix[i - 1][j];
//     } else if (!!matrix[i][j - 1] && !matrix[i - 1]) {
//       matrix[i][j] = board[i][j] + matrix[i][j - 1];
//     } else {
//       matrix[i][j] = board[i][j];
//     }
//   }
// }

// console.log(matrix);
