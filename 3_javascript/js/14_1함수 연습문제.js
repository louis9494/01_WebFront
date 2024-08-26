function ex1(name) {
  console.log("Hello,", name );
}

ex1("오세현!");

function print2(fn) {
  // console.log(fn);
  console.log(`a + b = ${fn(3, 4)}`);

}
  // 함수도 변수에 저장 가능! 병수명 == 함수명
  const sumFn = function(a, b) {
    return a + b; // 함수를 종료
                  // + a + b를 수행한 값을 가지고 호출한 곳으로 돌아감
  }
  // 전달인자로 함수를 전달
  print2(sumFn);



