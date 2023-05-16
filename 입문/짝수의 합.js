function solution(n) {
    // 2로 나눠떨어 떨어지는 n을 더해나간다.
    var sum = 0;
    for (var i = 0; i <= n; i++){ 
        if (i % 2 === 0 ) {
        sum += i;
    }}
    return sum;
}


// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }
// 예를들어, n이 6이면
// half는 3이 되고, 3*4 = 12가 반환된다.

// 앞으로 짝수의 합을 구할 때 참고해야겠다.
