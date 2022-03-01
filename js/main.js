$(document).ready(function(){

  $(".toggle").on("click", function(){
    $('.nav').toggleClass('collapse');
  });

  $(".source-icon").on("click", function(){
    $('.tab').toggleClass('source-display');
  });

  // owl carousel initialization 
  $('.owl-carousel').owlCarousel({
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    items: 1, 
    responsive: {
      0: {items: 1},
      420: {items: 1 }, 
      560: {items: 2 }, 
      960: {items: 3},   
      2560: {items: 4}     
    },
  });

  var links = new Array("../library/blogs/rival.html",);
   
  function random(){ 
    var linkselect = Math.floor(Math.random() * links.length);  
    return (links[linkselect]); 
  }

  document.getElementById('random').href = random();
});





