const TEST_WORD = "여섯글자 단어";
const WIDTH = 200;
const HEIGHT = 160;

const BASE_FONT_PIXEL = 13;
const BASE_FONT_PIXEL_HEIGHT = 2;

// 총 단어 cell 길이(공백1, 한글2로 계산 )
const wordCellLength = TEST_WORD.length * 2 - TEST_WORD.match(/\s/g).length;

const wordLength = wordCellLength * (BASE_FONT_PIXEL / 2);
const fontHeight = BASE_FONT_PIXEL_HEIGHT * (BASE_FONT_PIXEL / 2);

// 모든 글자는 "여섯글자 단어" 인 상태로 가정.
// 그럼 총 13칸을 먹음. (공백포함)
const getRandomInt = (max) => Math.floor(Math.random() * max);

const getWordCloud = () => {
  const board = Array(HEIGHT)
    .fill(0)
    .map(() => Array(WIDTH).fill(true));

  const words = Array(10).fill(TEST_WORD);
  const picked = [];

  while (!!words.length) {
    const wordWidth = picked.length < 3 ? 2 * wordLength : wordLength;
    const wordHeight = picked.length < 3 ? fontHeight * 2 : fontHeight;

    const startX = getRandomInt(WIDTH - wordWidth);
    const startY = getRandomInt(HEIGHT - wordHeight);

    let posX = startX;
    let posY = startY;

    const size = { width: wordWidth, height: wordHeight };

    while (true) {
      // 성공로직
      if (isSticky({ board, posX, posY, size })) {
        isConvertFalse({ board, posX, posY, size });
        const target = words.shift();
        picked.push([target, posX, posY, size]);
        break;
      }
      //   실패로직
      if (posX + size.width < WIDTH - 1) {
        posX++;
      } else if (posY + size.height < HEIGHT - 1) {
        posX = 0;
        posY += 1;
      } else if (posX + size.width === WIDTH && posY + size.height === HEIGHT) {
        posX = 0;
        posY = 0;
      } else {
        console.log("전체단어 추가 불가.");
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

const wordCloud = getWordCloud();

// HTML에 추가
const $box = document.querySelector(".box");
$box.style.width = WIDTH + "px";
$box.style.height = HEIGHT + "px";

wordCloud.forEach(([target, posX, posY, size], i) => {
  const _span = document.createElement("span");
  const text = document.createTextNode(target);
  _span.style.position = "absolute";
  _span.style.fontSize =
    i < 3 ? BASE_FONT_PIXEL * 2 + "px" : BASE_FONT_PIXEL + "px";
  _span.style.left = posX + "px";
  _span.style.top = posY + "px";

  _span.appendChild(text);
  $box.append(_span);
});

// 이전 랜덤뽑기 시도로직

// const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// const getRandom = ({
//   words,
//   size,
// }: {
//   words: string[];
//   size: { width: number; height: number };
// }) => {
//   const picked: {
//     word: string;
//     position: { x: number; y: number };
//   }[] = [];
//   const rest = [...words];

//   while (rest.length) {
//     const targetWord = rest[0];
//     const 공백길이 = targetWord.match(/\s/);

//     const BIG_FONT_WIDTH = 25;
//     const SMALL_FONT_WIDTH = 13;
//     const BIG_FONT_HEIGHT = 52;
//     const SMALL_FONT_HEIGHT = 27;

//     const fontWidth =
//       picked.length < 3
//         ? targetWord.length * BIG_FONT_WIDTH
//         : targetWord.length * SMALL_FONT_WIDTH;
//     const fontHeight = picked.length < 3 ? BIG_FONT_HEIGHT : SMALL_FONT_HEIGHT;

//     const randomX = getRandomInt(size.width - fontWidth);
//     const randomY = getRandomInt(size.height - fontHeight);

//     const newSx = randomX;
//     const newEx = randomX + fontWidth;
//     const newSy = randomY;
//     const newEy = randomY + fontWidth;

//     const isCanAdd = picked?.some((v, i) => {
//       const targetFontWidth =
//         i < 3
//           ? v.word.length * BIG_FONT_WIDTH
//           : v.word.length * SMALL_FONT_WIDTH;
//       const targetFontHeight = i < 3 ? BIG_FONT_HEIGHT : SMALL_FONT_HEIGHT;

//       // if (i < 3) {
//       //   // big
//       const sx = v.position.x;
//       const ex = v.position.x + targetFontWidth;
//       const sy = v.position.y;
//       const ey = v.position.y + targetFontHeight;

//       return newEx >= sx && newSx <= ex && newEy >= sy && newSy <= ey;
//     });
//     if (isCanAdd) continue;

//     rest.shift();
//     targetWord &&
//       picked.push({ word: targetWord, position: { x: randomX, y: randomY } });
//   }

//   return picked;
// };

// const BIG_WORD = {
//   x: 120,
//   y: 52,
// };
// const SMALL_WORD = {
//   x: 51,
//   y: 27,
// };
