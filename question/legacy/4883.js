// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const getAnswer = (n, board) => {
  board[0].forEach((v, i) => (board[0][i] = board[0][1]));

  for (let i = 1; i < n - 1; i++) {
    const c1 = board[i][0] + Math.min(board[i - 1][0], board[i - 1][1]);
    const c2 =
      board[i][1] + Math.min(board[i - 1][0], board[i - 1][1], board[i - 1][2]);
    const c3 = board[i][2] + Math.min(c2, board[i - 1][2]);
    board[i] = [c1, c2, c3];
  }

  //   console.log(board);
  const e1 = board.at(-2)[0] + board.at(-1)[0];
  const e2 = board.at(-2)[1];
  const e3 = board.at(-2)[2];

  const result = board.at(-1)[1] + Math.min(e1, e2, e3);

  return result;
};

const arr = [];

let i = 0;

while (i < input.length) {
  const n = Number(input[i]);
  if (!isNaN(n)) {
    const board = input
      .slice(i + 1, i + n + 1)
      .map((v) => v.split(" ").map((v) => Number(v)));

    const result = getAnswer(n, board);
    arr.push(result);
  }
  i += n + 2;
}

const answer = arr.map((v, i) => `${i + 1}. ${v}`);

console.log(answer.join("\n"));

// 이론상은 맞는데 틀린 이유를 모르겠네

// 현재 이동중인 정점의 위치도 계산할까...

// // 어차피 시작, 끝은 정해져있으니 최소 최대를 구할필요 없다.

// board[0].forEach((v, i) => (board[0][i] = board[0][1]));
// board.at(-1).forEach((v, i) => (board.at(-1)[i] = board.at(-1)[1]));

// // 각 시작 지점에서 출발했을 때 최소값을 아래랑 더해가면서 가면 듯?

// const answer = board.at(-1)[1];

// console.log(`1. ${answer}`);

// 테스트 케이스 여러개. 0으로 끊어서 배열 형태로 만들어서 또 해야할듯?

// 하 ㅅㅂ 옆으로도 되네.
// 그럼 맨 처음에선

// 내려갈 떄. 첫줄은 ok.
// 다음줄부터.
