let d = new Date();
let time = d.toLocaleTimeString();
function timeSec(){
  let timer = setInterval(function() {console.log(time)}, 1000);
}
timeSec();
