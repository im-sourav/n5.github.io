
const HB = document.getElementById("HB");
const text = document.getElementById("text");
const png = document.getElementById("png");

function hello() {
   HB.muted = true;
   HB.play();
   HB.muted = false;
   HB.loop = true;
}
hello()


const item = 100;
function xyz() {
  const con = document.querySelector(".contanier");
  var i = 0;
  while (i < item) {
    const coppy = document.createElement("div");
    coppy.classList.add("love");

    // fore Herts
    coppy.style.top = 6000 + "px";
    coppy.style.left = 0 + "px";
    coppy.style.width = 10 + "px";
    coppy.style.height = 10 + "px";
    con.appendChild(coppy);
    i++;
  }
}
setTimeout(() => {
  xyz();
  vove();
}, 4000); 

setTimeout(() => {
   png.style.top = "75%";
}, 20000); 

var mn = 0;
function vove() {
  if (mn == 300) {
    for (let j = 0; j < item; j++) {
      const heart = document.querySelectorAll("div")[j];
      let x = Math.floor(Math.random() * 750);
      let y = Math.floor(Math.random() * 360);
      let size = Math.floor(Math.random() * 20 + 3);
      let time = Math.floor(Math.random() * 10);

       // for other things
      text.style.color = "#000";

      // fore Herts
      heart.style.top = x + "px";
      heart.style.left = y + "px";
      heart.style.width = size + "px";
      heart.style.height = size + "px";
      // heart.style.animationDirection = ti+'s';
      heart.style.animationDelay = time - 1 + "s";
      heart.style.transition = time + 3 + "s";
      mn = 0;
    }
  }
  mn += 1;
  requestAnimationFrame(vove);
}