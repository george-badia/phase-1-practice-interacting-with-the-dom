"use strict"
function _toConsumableArray(a) {
   if (Array.isArray(a)) {
       for (let b = 0, c = Array(a.length); b < a.length; b++) {
           c[b] = a[b];
       }
       return c;
   }
   return Array.from(a);
}
const timer =function () {
   return setInterval(function () {
      const a =document.getElementById("counter");
      const b =parseInt(a.innerText);
      a.innerText = b + 1;
   },1000);
};

let playing = true;
let interval = timer();

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const commentForm = document.getElementById("form");


minus.addEventListener("click", function() {
   const a = document.getElementById("counter");
   const b = parseInt(a.innerText);
   a.innerText = b - 1;
});

plus.addEventListener("click", function() {
   const a = document.getElementById("counter");
   const b = parseInt(a.innerText);
   a.innerText = b + 1;
});
heart.addEventListener("click", function() {
   const a = document.getElementById("counter");
   const b = parseInt(a.innerText);
   const c = document.querySelector(".likes");
   let d;

   if ([].concat(_toConsumableArray(c.children)).map(function(a) {
       return parseInt(a.dataset.num);
   }).includes(b)) {
       d = document.querySelector('[data-num="' + b + '"]');
       const e = parseInt(d.children[0].innerText);
       d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
   } else {
       (d = document.createElement("li")).setAttribute("data-num", b);
       d.innerHTML = b + " has been liked <span>1</span> time";
       c.appendChild(d);
   }
});

pause.addEventListener("click", function() {
   if (playing) {
       playing = false;
       clearInterval(interval);
       this.innerText = "resume";
   } else {
       playing = true;
       interval = timer();
       this.innerText = "pause";
   }

   [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a) {
       if ("pause" !== a.id) {
           a.disabled = !playing;
       }
   });
});

commentForm.addEventListener("submit", function(a) {
   a.preventDefault();
   const b = this.children[0];
   const c = b.value;
   b.value = "";
   const d = document.querySelector(".comments");
   const e = document.createElement("p");
   e.innerText = c;
   d.appendChild(e);
});