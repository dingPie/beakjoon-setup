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
  let settled = 0;
  const setLeng = w * 2 + 1; // 하나의 기지국이 총 작동거리

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];
    const t = Math.ceil((station - w - settled - 1) / setLeng); // 4 5 이렇게 붙어있는 경우에는 설치할 필요가 없으므로 1을 빼줌

    answer = answer + t;
    settled = station + w;
  }

  const t = Math.ceil((n - settled) / setLeng);
  answer += t;

  return answer;
}

// const t1 = solution(11, [4, 11], 1);
// const t2 = solution(16, [9], 2);
// const t3 = solution(13, [3, 7, 11], 1);
const t4 = solution(10, [1, 5, 9], 1);
// const t5 = solution(10, [2, 3, 4], 1);
// const t6 = solution(10, [2, 3, 4], 5);
// const t7 = solution(10, [3], 10);
// const t8 = solution(10, [3], 3);
const t9 = solution(5, [1, 2, 3, 4, 5], 0);
// const t10 = solution(200000000, [100000000], 5);

// console.log(t1);
// console.log(t2);
// console.log(t3);
console.log(t4);
// console.log(t5);
// console.log(t6);
// console.log(t7);
// console.log(t8);
console.log(t9);
// console.log(t10);

// 슬라이딩 도어 문제였나?
// dp... 식 일것 같은데 처

// 쉽게 생각해서 풀어봐도 될 것 같은데.
