function solution(n, k) {
  let service;
  let nPrice = 12000;
  let kPrice = 2000;
  var answer = 0;

  // 양꼬치 = n, 음료수 = k
  if (n >= 10) {
    service = Math.floor(n / 10);
    return n * nPrice + (k - service) * kPrice;
  } else return n * nPrice + k * kPrice;
}
