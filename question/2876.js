// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const cnt = Number(input[0]);
const numbers = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

// 일렬로 늘어진 책상 중 두 책상을 선택, 그럼 그 책상과 그 사이에 있는 학생들 중 한명을 지목하여 질문 (책상에는 두명씩 앉아있다.)
// 근데 한가지 점수만 줄 수 있음. 결국 질문한 사람에게 모두 같은 점수를 주려고 함.

// grade가

// 특정 grade가 중간에 끊기면 안됨.
// 값이 같으면 낮은 점수(1이 낮음).

// 각 idx부터 가능할 때 까지 dp 실행?

const dp = Array(cnt).fill([1, 5]);

for (let i = 0; i < cnt; i++) {
  //   console.log(dp);
  const [a, b] = numbers[i]; // a, b case 둘 다 해야함.
  //   for (let j = i + 1; j < cnt; j++) {
  //     if (!numbers[j].includes(a)) {
  //       console.log("a랑 다름", a, numbers[j], j - i);
  //       if (dp[i][0] < j - i) {
  //         dp[i][0] = j - i;
  //         if (dp[i][1] > a) dp[i][1] = a;
  //       }
  //       break;
  //     }
  //   }

  console.log(dp);
  for (let j = i + 1; j < cnt; j++) {
    if (!numbers[j].includes(b)) {
      //   console.log("b랑 다름", b, numbers[j], j - i);
      if (dp[i][0] < j - i) {
        dp[i][0] = j - i;
        // 아니씨발 왜 다 변하냐고 dp[i] 만 변하는데
        if (dp[i][1] > b) dp[i][1] = b;
        break;
      }
    }
  }
}
console.log(dp);
