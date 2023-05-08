// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const [phone1, phone2] = input;
let num = "";

for (let i = 0; i < phone1.length; i++) {
  num += phone1[i];
  num += phone2[i];
}

while (num.length > 2) {
  let newNum = "";
  for (let i = 1; i < num.length; i++) {
    newNum += ((Number(num[i - 1]) + Number(num[i])) % 10).toString();
  }
  num = newNum;
}
console.log(num);
