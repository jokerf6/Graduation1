fetch("http://127.0.0.1:3000/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
fetch("http://127.0.0.1:3000/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
function data(json) {
  console.log(json);
  var img = document.createElement("img");
  img.src = json.data.User.image;
  var element = document.getElementById("icons");
  element.appendChild(img);
  element.insertBefore(img, element.firstChild);
  var hacks = json.data.hackathons;
  for (let i = 0; i < hacks.length; i += 1) {
    var box = document.createElement("div");
    box.classList.add("box");
    var element = document.getElementById("boxes");
    element.appendChild(box);
  }
}
