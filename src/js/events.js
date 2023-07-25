export function verifyEvent (day, month) {
  
  if(day >= 19 && day <=31 && month == 12)
    return "XMAS";
  else if(day >= 30 && day <=31 && month == 10)
    return "HLL";

}


function palysong(song, name, link){

  var r =confirm("Would You Like To Listen to Music?");
  if (r == true) {
    song.currentTime = 0

    document.getElementById("nowplaying").innerText = name;
    document.getElementById("nowplaying").setAttribute('href', link);
  
    song.volume = 0.1;
    song.play();
    song.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  
    setTimeout(() => {
      document.getElementById("player").style.transform = "translate(0,1vh)";
    }, 500);
    setTimeout(() =>{
      document.getElementById("player").style.transform = "translate(0,-15vh)";
    }, 4000);
    
  }

}


export const XMAS = () =>{
  
  var link = document.createElement( "link" );
  link.href = "./src/assets/xmas.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";
  document.getElementsByTagName( "head" )[0].appendChild( link );

  var song = new Audio('.\\src\\assets\\audio\\let-it-snow-let-it-snow-let-it-snow-official-music-video.mp3');
  palysong(song, "Frank Sinatra - Let It Snow! Let It Snow! Let It Snow!", "https://www.youtube.com/watch?v=sE3uRRFVsmc&ab_channel=FrankSinatraVEVO");

  setInterval(createSnowFlake, 50);

  function createSnowFlake() {
    const snow_flake = document.createElement("p");
    snow_flake.classList.add("fas");
    snow_flake.classList.add("fa-snowflake");
    snow_flake.style.left = Math.random() * window.innerWidth + "px";
    snow_flake.style.animationDuration = Math.random() * 8 + 3 + "s";
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 5 + 8 + "px";

    document.body.appendChild(snow_flake);

    setTimeout(() => {
      snow_flake.remove();
    }, 5000);
  }

  return ".\\src\\assets\\img\\avatars\\avatar_xmas.png";

}


export const HALLOWEEN = (avatar) =>{
  
  document.getElementById("avatar").src = avatar;
  //var song = new Audio('assets\\let-it-snow-let-it-snow-let-it-snow-official-music-video.mp3');
  //palysong(song, "Frank Sinatra - Let It Snow! Let It Snow! Let It Snow!", "https://www.youtube.com/watch?v=sE3uRRFVsmc&ab_channel=FrankSinatraVEVO");

}