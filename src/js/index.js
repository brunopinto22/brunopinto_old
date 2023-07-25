import { verifyEvent, XMAS, HALLOWEEN } from "./events.js";

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;


var audio = new Audio('.\\src\\assets\\audio\\easteregg.mp3');
var audio2 = new Audio('.\\src\\assets\\audio\\easteregg_mega.mp3');

var avatar;

let achivements = 0;
let count = 0;
let i = 0;
let x = 0;
let y = 0;
let z = 0;


document.querySelectorAll(".close").forEach((element) => {
  element.addEventListener("click", () => {
    document.getElementById("sidebar").style.transform = "translateX(100%)";
  });
});
document.getElementById('open').addEventListener("click", () => {
  document.getElementById("sidebar").style.transform = "translateX(0%)";
});



const init = () => {

  // verify day
  switch(verifyEvent(day,month)){
    case 'XMAS':
      console.log('Its CHRISTMAS');
    break;
    case 'HLL':
      console.log('Its HALLOWEEN');
    break;
    default:
      avatar = avatar = ".\\src\\assets\\img\\avatars\\avatar.png";
      console.log('hello :)');
  }
  document.getElementById("avatar").src = avatar;

}
window.addEventListener("load", init);


/*----------------------------------------- COLORS -----------------------------------------*/
function callNotification(){
  audio.play();
  document.getElementById("notification").style.transform = "translate(0,1vh)";

  setTimeout(() => {document.getElementById("notification").style.transform = "translate(0,-15vh)";}, 4000);
}

document.querySelectorAll('.color').forEach(element => {
  element.addEventListener('click', copyToClipboard);
});

function copyToClipboard() {
  const computedStyle = window.getComputedStyle(this);
  const rgbColor = computedStyle.getPropertyValue('background-color');

  // Convert RGB color to hex format
  const hexColor = rgbToHex(rgbColor);

  var tempInput = document.createElement("input");
  tempInput.value = hexColor;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  callNotification()

}
function rgbToHex(rgbColor) {
  // Extract RGB values from the string
  const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    return rgbColor;
  }

  // Convert the RGB values to hex format
  const hexColor = "#" + ((1 << 24) | (parseInt(match[1]) << 16) | (parseInt(match[2]) << 8) | parseInt(match[3])).toString(16).slice(1);
  return hexColor;
}


/*----------------------------------------- TYPING -----------------------------------------*/
var typed = new Typed('#typing', {
  strings: ['web developer^1000', 'software engineer^1000', 'web designer^1000'],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
  loopCount: Infinity,
});


/*------------------------------------ ENTRY ANIMATIONS ------------------------------------*/
const prObs = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('pr-animation');
      // Unobserve the element to avoid triggering the animation multiple times
      prObs.unobserve(entry.target);
    }
  });
});

// Observe all elements with the class 'pr'
document.querySelectorAll('.pr').forEach(prElement => {
  prObs.observe(prElement);
});



/*---------------------------------------- EASTEREGGS ----------------------------------------*/
function calleaster(){
  console.log('achivements = ' + achivements);

  if(achivements == 5){
    audio2.play();
    document.getElementById("eastertext").style.display = "none";
    document.getElementById("congrats").style.display = "inline";
  } else{
    audio.play();
    document.getElementById("score").innerHTML = achivements;
  }

  document.getElementById("easter").style.transform = "translate(0,1vh)";
  setTimeout(() => {document.getElementById("easter").style.transform = "translate(0,-15vh)";},3000);
}


document.getElementById("avatar").addEventListener("click",function addCount(){
  count++;

  if(count == 12){
    document.getElementById("avatar").src = ".\\src\\assets\\img\\avatars\\avatar2.png";
    achivements++;
    calleaster();
  } else if(count > 12){
    if(count % 2 == 0)
      document.getElementById("avatar").src = avatar;
    else
      document.getElementById("avatar").src = ".\\src\\assets\\img\\avatars\\avatar2.png";

  }
      
});

document.getElementById("game").addEventListener("click",function gameopened(){
    if(y == 0){
      achivements++;
      calleaster();
      y++;
    }

    window.open('./src/assets/Game_Website/index.html', '_blank');
});

document.getElementById("pfp").addEventListener("click",function pfpclicked(){
  if(i == 0){
    achivements++;
    document.getElementById("pfp").src = "assets\\img\\pfp2.png";
    calleaster();
    i++;
  } else if(i % 2 != 0){
    document.getElementById("pfp").src = "assets\\img\\pfp.png";
    i++;
  } else {
    document.getElementById("pfp").src = "assets\\img\\pfp2.png";
    i++;
  }
});

document.getElementById("blender").addEventListener("click",function blender(){
  if(x == 0){
    achivements++; x++;
    window.open('https://youtu.be/3w5aJzEuHIk', '_blank');
    calleaster();
  } else 
    window.open('https://youtu.be/3w5aJzEuHIk', '_blank');
});

document.getElementById("art").addEventListener("click",function artseen(){
  if(z == 0){
    achivements++;
    calleaster();
    z++;
  }
});