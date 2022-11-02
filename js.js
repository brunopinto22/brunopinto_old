const date = new Date();
console.log(date);
let day = date.getDate(); let month = date.getMonth() + 1;

var audio = new Audio('assets\\easteregg.mp3');
var audio2 = new Audio('assets\\easteregg_mega.mp3');
let achivements = 0;
let count = 0;
let i = 0; let x = 0; let y = 0; let z = 0;


/*---------------------------------------- SIDEBAR ----------------------------------------*/
function opensidebar(){
  document.getElementById("sidebar").style.width = "100%";
}
function closesidebar(){
  document.getElementById("sidebar").style.width = "0";
}

/*---------------------------------------- EASTEREGGS ----------------------------------------*/
function calleaster(){
  console.log(achivements);

  if(achivements == 5){
    audio2.play();
    document.getElementById("easter").style.transform = "translate(0,1vh)";
    document.getElementById("eastertext").style.display = "none";
    document.getElementById("congrats").style.display = "inline";
  } else{
    audio.play();
    document.getElementById("score").innerHTML = achivements;
    document.getElementById("easter").style.transform = "translate(0,1vh)";
  }
}
function closeeaster(){document.getElementById("easter").style.transform = "translate(0,-15vh)";}


document.getElementById("avatar").addEventListener("click",function addCount(){
  count++;

  if(count == 12){
    document.getElementById("avatar").src = "assets\\img\\avatar2.png";
    achivements++;
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
  } else if(count == 22)
    if(day >= 20 && month == 12)
      document.getElementById("avatar").src = "assets\\img\\avatar_xmas.png";
    else
      document.getElementById("avatar").src = "assets\\img\\avatar.png";
      
});

document.getElementById("game").addEventListener("click",function gameopened(){
    if(y == 0){
      achivements++;
      setTimeout("calleaster()", 500);
      setTimeout("closeeaster()", 4000);
      y++;
    }
});

document.getElementById("pfp").addEventListener("click",function pfpclicked(){
  if(i == 0){
    achivements++; i++;
    document.getElementById("pfp").src = "assets\\img\\pfp2.png";
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
  } else if(i % 2 != 0){document.getElementById("pfp").src = "assets\\img\\pfp.png"; i++;
  } else {document.getElementById("pfp").src = "assets\\img\\pfp2.png"; i++;}
});

document.getElementById("blender").addEventListener("click",function blender(){
  if(x == 0){
    achivements++; i++;
    window.open('https://youtu.be/3w5aJzEuHIk', '_blank');
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
  } else 
    window.open('https://youtu.be/3w5aJzEuHIk', '_blank');
});

document.getElementById("art").addEventListener("click",function artseen(){
  if(z == 0){
    achivements++;
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
    z++;
  }
});



/*---------------------------------------- FORM ----------------------------------------*/
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thank you!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem :(";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

/*---------------------------------------- EVENTS ----------------------------------------*/

if(day >= 20 && day <=31 && month == 12){
  document.getElementById("style").href = 'assets\\events\\xmas.css';
  document.getElementById("avatar").src = "assets\\img\\avatar_xmas.png";
  document.getElementById("footer_avatar").src = "assets\\img\\avatar3_xmas.png";


}