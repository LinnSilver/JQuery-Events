
$("#myButton").removeClass("blueBox");
$("#myButton").addClass("blueBox");
// Is same as:
$("#myButton").removeClass("border").addClass("blueBox");

$("p").css("color", "blue").slideUp(2000).slideDown(2000);
$("a").attr("href", "http//www.example.com");  


$(document).ready(function() {
    //$("#stream1_btn").on("click", function() { funkar lika som ...
    $("#stream1_btn").click(function() {

        $(".stream1").show();
        $(".stream2").show("slow");
        $(".stream3").show("medium");
        $(".stream1").show("fast");
        $(".stream1").show(1000);

        $(".stream1").hide("slow");

        $(".stream1").toggle(1000);

        $(".stream1").slideDown("medium");
        $(".stream1").slideUp("medium");
        $(".stream1").slideToggle("medium");

        $(".stream1").fadeIn("medium");
        $(".stream1").fadeOut("medium");

        $(".stream1").fadeToggle("medium");
        $(".stream1").fadeTo(1000, 0,5);

   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 


