$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".navi").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      //this is the key to stopping the link bewing followed immediately
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-73
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
//Will create smooth scrolling for all anchors within the page

$(document).ready(function() {
    $('#email').click(function() {
        $('#contactForm').attr('action',
                       'mailto:wonbuu@gmail.com?subject=' +
                       $('#name').val() +'&body=' + $('#message').val()) + $('#num').val();
        $('#contactForm').submit();
        $("#message").val("");
    });
});
//I'll need some php to host the email
