
// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }



const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'orange','blue'];
const color = document.querySelector('.color')


document.getElementById('btn').onclick = function(){
const randomNumber = getRandomnumber();
console.log(randomNumber)

document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber];
}

function getRandomnumber(){
  return Math.floor(Math.random() * colors.length)
}






















