// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [name1, name2] = input;

const strokes = [
  3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1,
].map((v) => v.toString());

let str = "";
for (let i = 0; i < name1.length; i++) {
  const t = name1.charCodeAt(i) - 65;
  const tt = name2.charCodeAt(i) - 65;
  str += strokes[t];
  str += strokes[tt];
}

while (str.length > 2) {
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    const val = (Number(str[i - 1]) + Number(str[i])) % 10;
    newStr += val.toString();
  }

  str = newStr;
}
console.log(str);

// 4 5 5 5 4
// 9 0 0 9
// 9 0 9
// 9 9
