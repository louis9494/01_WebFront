const boxList = document.querySelectorAll(".box")

const inputList = document.querySelector(".color-input")

// console.log(boxList);
// console.log(inputList);

// #changeButton 요소를 클릭했을 때 
document.querySelector("#changeButton").addEventListener("click", function() {

  // inputList에 작성된 각 내용을 boxList에 있는 각 div에 대입
  for(let i=0; i < boxList.length; i++) {
    boxList[i].computedStyleMap.backgroundColor = inputList[i].value;
  }

});

