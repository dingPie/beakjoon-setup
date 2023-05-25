// 시작 좌표로 해서 한칸씩 가는건?
// 작은글자? 13, 큰글자 30
// 7px -> 1칸, 글자는 2칸
// 작은글자 14px
// 큰 글자 28px
//

const WIDTH = 280;
const HEIGHT = 160;

// 모든 글자는 xxx xxx인 상태로 가정.
// 그럼 총 13칸을 먹음.
const getRandomInt = (max) => Math.floor(Math.random() * max);

const setGrid = () => {
  const board = Array(HEIGHT)
    .fill(0)
    .map(() => Array(WIDTH).fill(true));

  const words = Array(10).fill("여섯글자 단어");
  const picked = [];

  const WORD_LENGTH = 13 * 7;
  const WORD_HEIGHT = 2 * 7;

  while (!!words.length) {
    const wordWidth = picked.length < 3 ? 2 * WORD_LENGTH : WORD_LENGTH;
    const wordHeight = picked.length < 3 ? WORD_HEIGHT * 2 : WORD_HEIGHT;
    const startX = getRandomInt(WIDTH - wordWidth);
    const startY = getRandomInt(HEIGHT - wordHeight);
    let posX = startX;
    let posY = startY;

    const size = { width: wordWidth, height: wordHeight };

    while (true) {
      // posX + size.width < WIDTH && posY + size.height < HEIGHT
      if (isSticky({ board, posX, posY, size })) {
        // 성공로직
        console.log("성공로직", startX, posX, startY, posY);
        isConvertFalse({ board, posX, posY, size });
        const target = words.shift();
        picked.push([target, posX, posY, size]);
        break;
      }
      //   실패로직
      if (posX + size.width < WIDTH) {
        posX++;
      } else if (posY + size.height < HEIGHT) {
        posX = 0;
        posY += 1;
      } else if (posX + size.width === WIDTH && posY + size.height === HEIGHT) {
        posX = 0;
        posY = 0;
      } else {
        console.log("전체단어 추가 불가");
        return picked;
      }
    }
  }
  console.log("전체단어 추가 성공");
  return picked;
};

const isSticky = ({ board, posX, posY, size }) => {
  for (let i = 0; i < size.height; i++) {
    for (let j = 0; j < size.width; j++) {
      //   console.log("검사", board[i][j]);
      if (!board[posY + i][posX + j]) return false;
    }
  }
  return true;
};

const isConvertFalse = ({ board, posX, posY, size }) => {
  for (let i = 0; i < size.height; i++) {
    for (let j = 0; j < size.width; j++) {
      board[posY + i][posX + j] = false;
    }
  }
};

const test = setGrid();

console.log("추가된 단어", test);

const $box = document.querySelector(".box");

test.forEach(([target, posX, posY, size], i) => {
  const _span = document.createElement("span");
  const text = document.createTextNode(target);
  _span.style.position = "absolute";
  _span.style.fontSize = i < 3 ? "26px" : "13px";
  _span.style.left = posX + "px";
  _span.style.top = posY + "px";

  _span.appendChild(text);
  $box.append(_span);
});
