// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
console.log(mimicServerCall())
let modal=document.getElementById('modal');
console.log("ff");
//document.getElementsByTagName("h2")[0].classList.remove("hidden");
let l=mimicServerCall();
console.log("tada");

console.log(l);
l.then(console.log("gg"));
l.catch(document.getElementsByTagName("h2")[0].classList.remove("hidden"));
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
