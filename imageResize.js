$(document).ready(function() {

  $('nav a').click(function() {
    $('nav a.active').removeClass("active");

    $(this).addClass("active");

    $('header').animate({ "padding-left": "+=50px" }, "slow" );
  });

  $('article section img').click(function() {
    var $sectionImg = $(this).parent();    // Pak de 'section' die boven de image zit

    $('section.big').removeClass("big");  // Haal alle big classes weg
    $sectionImg.addClass("big");          // Voeg aan de section een big class toe
  });

  $('nav a:contains("About Me")').click(function() {
    $('article').html("<h2>About me</h2><p>Dit is keiidy's fanpage</p>");
  });

});
