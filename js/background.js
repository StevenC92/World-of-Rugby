/*Creates a background that changes colors*/
$(document).ready(function () {
    // Put the three background images into an array.
    var backgrounds = ["images/greenbackground.jpg", "images/bluebackground.jpg", "images/redbackground.jpg"];
    var counter = 1;
    // setInterval function is used to change the background image continually.
    setInterval(function () {
        {
            $("#imageContainer").css("background-image", "url(" + backgrounds[counter % 3] + ")");
            counter++;
         }
         }, 10000);
}
);
