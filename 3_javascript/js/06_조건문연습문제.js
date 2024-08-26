//문제 1
const input = document.getElementById("input");
function input1() {
  
  let a = 5;
  let b = 10;

  if(a < b) {
    alert("a < b") 
  }
  let result;
  result = a < b
  result1.innerText = a < b;
  
}
//문제 2

function input2() {
  let n = 7;
  if(n % 2 == 1 ) { 
    alert(`${n} 는 홀수 입니다.`);

  } else {
    alert(`${n} 는 짝수 입니다.`);

  }
}

//문제 3
const number1 = document.getElementById("number1");

function input3() {
  const number = Number(number1.value); 

  if(number1.value.length == 0) {
    alert("값을 입력해주세요");
  } else if(number == 15) {
    alert("정답이 아닙니다");
  } else if(number == 22) {
    alert("정답!");
  } else if(number == 9) {
    alert("정답이 아닙니다");
  } else {
    alert("정답이 아닙니다");
  }

}
//문제 4
function test4() {
  const str = document.getElementById("str").value;

  if(str.length == 0) {
    console.log("미입력");
  
  } else if( str == "apple" ) {
    console.log("사과입니다");
  
  } else if( str == "banana" ) {
    console.log("바나나입니다");
  
  } else {
    console.log("다른 과일입니다");

  }

}
//문제 5
const grade1 = document.getElementById("grade1");

function input5() {
  const grade = prompt(grade1.value);

  if(grade1.length == 0) {
  alert("값을 입력해주세요");
  } else if( grade < 0 || grade1 > 100) {
  alert("잘못 입력하였습니다");
  } else if( grade >= 90) {
  alert("등급은 A입니다");
  } else if( grade >= 81) {
  alert("등급은 B입니다");
  } else if( grade >= 71) {
  alert("등급은 C입니다");
  } else if( grade >= 61) {
  alert("등급은 D입니다");
  } else {
  alert("등급은 F입니다");
  }
  
}
//문제 6
const age1 = document.getElementById("age1");
const cm1 = document.getElementById("cm1");

function input6() {
  const age = Number(age1.value);
  const cm = Number(cm1.value);
  if(age >= 12 && cm >= 140.0  ) {
    alert("탑승 가능")
  } else if(age < 0 || age > 100) {
    alert("잘못 입력 하셨습니다")
  } else if(age < 12) {
    alert("적정 연령이 아닙니다")
  } else if(cm < 140.0) {
    alert("적정 키가 아닙니다")
  } else {
    alert("입력 오류입니다")
  }
}
//문제 7

const inputMonth = document.getElementById("inputMonth");
const inputTemperature = document.getElementById("inputTemperature");


function test7() {

  const month = Number(inputMonth.value);

  let season; // 계절이 뭔지 결과값 저장할 변수
  let temperature; // 몇도 인지 저장할 변수

  // 입력된 달에 따른 계절 판단
  if(month >= 3 && month <= 5) {
    // ( month == 3 || month == 4 || month == 5) 도 가능
    season = "봄";

  } else if(month >= 6 && month <= 8) {
    season = "여름";

    temperature = Number(inputTemperature.value);

    if(temperature >= 30) {
      season = `${season} [온도 : ${temperature}도, 폭염!!!]`;
    }

  } else if(month == 9 || month == 10 || month == 11) {
    season = "가을";

  } else if(month == 12 || month == 1 || month == 2) {
    season = "겨울";

    temperature = Number(inputTemperature.value);

    if(temperature <= 0) {
      season = `${season} [온도 : ${temperature}도, 한파!!!]`;
    }

  } else {
    season = "잘못된 달을 입력하셨어요!";

  }


  alert(season);



}