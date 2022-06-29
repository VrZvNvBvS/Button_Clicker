var x = 0;
var y = 0;

function topLikes(e) {
  x++;
  e.innerText = x + " Likes";
  alert("Ninja was liked");
}

function bottomLikes(e) {
  y++;
  e.innerText = y + " Likes";
  alert("Ninja was liked");
}

function clearButton(e) {
  e.remove();
}

function logging(e) {
  if (e.innerText == "Login") {
    e.innerText = "Logoff";
  } else {
    e.innerText = "Login";
  }
}
