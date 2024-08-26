// 변수 선언 및 초기화

// document : HTML 문서 내에서
// get : 얻다
// Element : HTML 요소
// ById : 아이디가 일치(하는 요소를 가져오겠다.)

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

// console.log(number1);

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
  // input요소.nalue : input 요소에 작성된 값 얻어오기

  const value1 = number1.value;
  const value2 = number2.value;

  

  // input 요소에 작성된 값 무조건 문자열(string) 형태라서
// 더했을 때 이어쓰기 되는 문제 발생

// 해결방법
// 문자열을 숫자로 변경하는 코드를 수행
// 숫자만 작성된 문자열 "123"을
// 진짜 숫자타입 123 으로 바꾸는 방법
// -> Number("123")--> 123

console.log(Number(value1) + Number(value2));


// 두 수의 합을
// 아이디가 "calcResult"인 요소(result 변수)의
// 내부 글자(innerText)로 대입하기
  result.innerText = Number(value1) + Number(value2);
}

// 뺴기 함수
function minusFn() {

  const value1 = number1.value;
  const value2 = number2.value;


  console.log(Number(value1) - Number(value2));
}

// 곱하기 함수
function xFn() {
  const value1 = number1.value;
  const value2 = number2.value;


  console.log(Number(value1) * Number(value2));

}

// 나누기 함수
function dFn() {
  const value1 = number1.value;
  const value2 = number2.value;



  result.innerText = value1 / value2;

  
  console.log(Number(value1) / Number(value2));
}

// modulo 함수
function mFn() {
  const value1 = number1.value;
  const value2 = number2.value;



  result.innerText = value1 % value2;
}


// ---------------------------------

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");

function totalFn() {
  total.innerText = 
    Number(num1.value) 
  + Number(num2.value) 
  + Number(num3.value);

}

// ----------------------------------

// 증가 감소 연산자 (++, --)

// 증가, 감소할 수를 저장할 변수 선언 및 0으로 초기화
let count = 0;
// (주의) const로 선언하면 값을 증가/감소 시킬수 없다!

// 필요한 요소 얻어오기

// 문서 내에서 id가 "result2"인 요소를 얻어와 resul2 변수에 대입
const result2 = document.getElementById("result2");

// 1증가 함수
function increase() {
  // 전위 연산
  // count 변수의 값 1 증가
  ++count; // 또는 ++count; -> count 값이 1 증가

  // 증가한 count 값을 result2의 내부 글자로 대입
  result2.innerText = count;
}

function decrease() {
  // 후위연산
  // 감소한 count 값을 result2의 내부 글자로 대입
  result2.innerText = --count;

}

// 전위, 후위 연산 확인하기
function check() {
  // 함수 밖, 안은 구분되는 공간
  // 밖에 작성한 변수 count,
  // 안에 작성한 변수 count
  // 서로 다른 변수(동명이인)
  let count = 100;
  // 컴퓨터한테 연산은 +-*/ 뿐만 아니라 코드를 하나하나 실행하는 것들이 전부 연산 처리됨.

  // 전위 연산(++count, --count)확인
  // 다른 연산보다 먼저 수행
  // -> count 값이 먼저 증가/감소 후
  // -> counsole에 출력

  console.log(++count);//101
  console.log(++count);//102
  console.log(++count);//103
  console.log(--count);//102
  console.log(--count);//101
  console.log(--count);//100

  // 후위 연산(count++, count--) 확인
  // -> 다른 연산이 다 끝나고 마지막에 수행
  
  count = 50

  console.log(count++); // 50 출력 후 한번 더 해야 51로 증가 (콘솔 창에만 안뜸)
  console.log(count); // 51

  console.log(count--); // 51 출력 후 한번 더 해야 50으로 감소 (콘솔 창에만 안뜸)
  console.log(count--); // 50

  let a = 10;
  let b = 5;
  let c = ++a * b--;

  // 최종적으로 a,b,c에 저장된 값은?
  // a->11
  // b->4
  // c->55

  console.log(a, b, c);


}
//연습문제
function printJSObject() {
  const userName = document.getElementById('userName');
  const userAge = document.getElementById('userAge');
  const userGender = document.getElementById('userGender');

  const userInfo = {
    이름 : userName.value,
    나이 : userAge.value,
    성별 : userGender.value
  };

  console.log(userInfo); 
 
}

// 태그 사이 문장 가져오기
