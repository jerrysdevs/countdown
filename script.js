var div = document.createElement('div')
div.setAttribute('class','modal-dialog modal-dialog-centered')
// div.setAttribute('id','countdown')


var p= document.createElement('h1')
p.setAttribute('id','countdown')

div.appendChild(p)
document.body.append(div)

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Happy Independence Day";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);