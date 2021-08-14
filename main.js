let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};



// MODAL 2
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var img2 = document.getElementById("img2");

// When the user clicks the button, open the modal
img2.onclick = function () {
  modal2.style.display = "block";
};

// MODAL 3
var modal3 = document.getElementById("modal3");

// Get the button that opens the modal
var img3 = document.getElementById("img3");

// When the user clicks the button, open the modal
img3.onclick = function () {
  modal3.style.display = "block";
};


// MODAL 4
var modal4 = document.getElementById("modal4");

// Get the button that opens the modal
var img4 = document.getElementById("img4");

// When the user clicks the button, open the modal
img4.onclick = function () {
  modal4.style.display = "block";
};


// MODAL 5
var modal5 = document.getElementById("modal5");

// Get the button that opens the modal
var img5 = document.getElementById("img5");

// When the user clicks the button, open the modal
img5.onclick = function () {
  modal5.style.display = "block";
};




// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
};
