$("h1").css("color", "red");

$("h1").addClass("...."); // Add or remove class to css.
$("h1").removeClass("...");

$("h1").text("Done List");// Manupulating text

$("img").attr("src") // Will show src attribute in img 
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color","purple");
});  // Added event listener ,when clicked it will change color

 $("button").click(function(){
     $("h1").css("color", "purple"); //Added event listener to buttons
 });

 $(document).keypress(function(event){
    $("h1").text(event.key); // Shows pressed key in keyboard on h1 tag
 });

$("h1").on("mouseover",function(){
    $("h1").css("color", "purple"); // changes color when mouse is over the site
});

$("h1").before("<button> NEW </button>");// Adding button before h1 tag

$("button").on("click", function(){
     $("h1").hide(); // Hide the h1 tags
     $("h1").slideUp(); // Slide up h1 tags 
     $("h1").slideDown(); // Slide down h1 tags 
     $("h1").animate({margin:"20%"}); 
});