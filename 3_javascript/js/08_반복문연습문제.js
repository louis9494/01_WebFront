function fn1() {
  let x = 10;
  while( x > 0 ) {
   console.log(x);
   x--;
  }
 }

function fn2() {
  for(let i = 1; i <= 20; i++) {

    if(i % 2 == 1 ) continue;

    console.log(i);
  }
}

function fn3() {
  result = '';

  for(let i = 1 ; i <= 50 ; i++){
    if(i % 5 === 0){
      console.log(i);
    }

  }
  

}
function fn5() {
  for (let i = 2; i < 10; i++){               // 2단부터 시작하게 되고 9단까지 있으므로 10 미만까지 증감되고
    for(let j = 1; j < 10; j++){             //  1부터 9까지 곱해지기 때문에 1부터 시작하고 10 미만가지 증감되고 설정한다.
    console.log(`${i}*${j} = ${i*j}`)
    
  // 리터럴 템플릿 벡틱를 사용해서 ${ i의 값} * ${ j 의값 } = ${ i * j } 결과값을 보여준다.
  }    
  }
}

