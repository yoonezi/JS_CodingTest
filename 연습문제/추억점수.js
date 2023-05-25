// {name[0] : yearning[0]} 형태로 객체 저장, 사진에서 반복문으로 name이 있는지 확인
// answer에 name에 해당하는 yearning값 더하기

function solution(name, yearning, photo) {
  var answer = [];
  const memory = {};

  for (let i = 0; i < name.length; i++) {
    memory[name[i]] = yearning[i];
  }

  // 각 photo 마다의 점수를 배열로 구해야 하므로 map을 이용한다.
  return photo.map((arr) =>
    // 각 요소 배열을 reduce 메서드를 이용해 점수를 구한다.
    // memory 객체에 해당 사람이 있으면 점수를 없으면 0을 더해준다.
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
  );
}
