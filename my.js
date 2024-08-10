let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");

let mytxt = document.querySelector(".mydiv2");
let mycopy= document.querySelector(".copy");

let rgb1 = "#111111";
let rgb2 = "#ffffff";

let hexValue = () => {
  let myHexValue = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValue[Math.floor(Math.random()* 16)];
  }
  console.log(colors);
  return colors;
};

const handleButton1 = () => {
  rgb1 = hexValue();
  btn1.innerText = rgb1;
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  mytxt.innerHTML = `background-color: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
  rgb2 = hexValue();
  btn2.innerText = rgb2;
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  mytxt.innerHTML = `background-color: linear-gradient(to right, ${rgb1}, ${rgb2})`;  
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

mytxt.addEventListener('click', ()=>{
  navigator.clipboard.writeText(mytxt.innerHTML);
});