$(function (){


    $('.main-carousel').flickity({
    // option
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: true,
      imagesloaded: true
    });






    $('.sign-up-form form').on('submit', function(event) {
      event.preventDefault();

      var userEmail = $('input[type="email"]').val();

      if(userEmail) {
        alert("Thank you for subscribing");

          } else {
          alert("Please provide a valid email address");

        }

});

});
