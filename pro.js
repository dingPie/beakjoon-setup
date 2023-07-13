// 이거 최대큰수랑 비슷한 문제.
// 냅색인가? 아무튼
// 우표문제!

// 이걸 뜯었을 때 / 안뜯었을때 최대값을 계산해야 함.
// dp를 어떻게 구성해야 되지? 2차원배열? 1차웡배열?

// 냅색 알고리즘이랑 비슷하니까 2차원 배열로 구성해야 될 것 같고
// 어떻게 채워나가지 ?

const sticker = [14, 6];
function solution(sticker) {
  const n = sticker.length;
  if (n === 1) return sticker[0];
  else if (n === 2) return Math.max(sticker[0], sticker[1]);
  const dp = Array(n).fill(0);

  if (sticker[0] - sticker.at(-1) > 0) {
    sticker[0] -= sticker.at(-1);
  }

  dp[0] = sticker[0];
  dp[1] = Math.max(sticker[0], sticker[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + sticker[i]);
  }

  return dp.at(-1);
}
const answer = solution(sticker);
console.log(answer);

// 효율성은 싹 통과 d

// n번째 숫자까지만? 전부다? dp돌려?

// 계단처럼 n번쨰를 진행했을 떄 잃게되는 수를 기록해야 할 듯?

//

// 이걸 고르고 이게 빠진 dp를 고르느냐 /
// 이걸 안고르고 그냥 이전 dp를 이어가느냐 중 어떤게 더 큰지?

// 골랐을 떄 어떻게 처리하지?

// 3개중 어떤걸 선택?

//  [14, 6, 5, 11, 3, 9, 2, 10];

// 14-10
// 4 6
// 4 6 9
// 4 6 9 17
// 4 6 9 17 17
// 4 6 9 17 17 26
// 4 6 9 17 17 26 26
// 4 6 9 17 17 26 26 36
