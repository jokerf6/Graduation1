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
  var img = document.createElement("img");
  img.src = json.data.User.image;
  var element = document.getElementById("icons");
  element.appendChild(img);
  element.insertBefore(img, element.firstChild);
}

/* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
var vis = false;
function myFunction() {
  console.log(vis);
  if (!vis) {
    var di = document.createElement("div");
    di.classList.add("diList");
    di.innerHTML = "heee";
    var element = document.getElementById("nav2");
    element.appendChild(di);
    vis = true;
  } else {
    vis = false;
  }
  //     di.classList.add("dropdown-content");
  //  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
  // for (let j = 1; j <= 6; j += 1) {
  //   if (!event.target.matches(".dropbtn")) {
  //     var di = documentcreateElement("div");
  //     di.classList.add("dropdown-content");
  //     var i;
  //     var element = document.getElementById("nav2");
  //     element.appendChild(di);
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains("show")) {
  //         openDropdown.classList.remove("show");
  //       }
  //     }
  //   }
  // }
};
