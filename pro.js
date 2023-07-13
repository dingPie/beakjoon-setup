// 이건 배열이라 시간초과남.
// function solution(n, stations, w) {
//   const dp = Array(n).fill(false);

//   const settle = (idx) => {
//     for (let i = idx - w; i <= idx + w; i++) {
//       if (i < 0) continue;
//       if (i > n) break;
//       dp[i] = true;
//     }
//   };

//   stations.forEach((v) => {
//     settle(v - 1);
//   });

//   let idx = 0;
//   let answer = 0;

//   while (idx < n) {
//     while (dp[idx]) idx += 1;
//     if (idx < n) {
//       settle(idx + w);
//       idx += w;
//       answer += 1;
//     }
//   }

//   return answer;
// }

function solution(n, stations, w) {
  let answer = 0;
  let idx = 0;
  let settled = 0;

  const setLeng = w * 2 + 1;

  if (stations[0] - w <= 1) settled = stations[0] + w - 1;

  // Math.ceil 로 구하면 될 것 같고/
  // 그럼 어디까지 설치된지 알아야함.

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i] - 1; // idx 기준

    const t = Math.ceil((station - settled) / setLeng);
    answer += t;
    settled += t * setLeng;

    console.log(t, settled);
    // console.log(station);
  }
  console.log("answer", answer);
}

const t1 = solution(11, [4, 11], 1);
const t2 = solution(16, [9], 2);
// const t3 = solution(13, [3, 7, 11], 1);
// const t4 = solution(10, [1, 9, 5], 1);
// const t5 = solution(10, [2, 3, 4], 1);
// console.log(t1);
// console.log(t2);
// console.log(t3);
// console.log(t4);

// 슬라이딩 도어 문제였나?
// dp... 식 일것 같은데 처

// 쉽게 생각해서 풀어봐도 될 것 같은데.
