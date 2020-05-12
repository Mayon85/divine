// RESPONSIVE NAVBAR
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

// CAROUSEL INSTAGRAM

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5
});