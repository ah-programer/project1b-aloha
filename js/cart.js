 $(function(){

  //incrementing the cart counter when the user adds//
  var numItem = 0;
  $('.product-wrapper button').on('click', function(event){
    event.preventDefault();
    numItem++;
    $('.counter').text(numItem).show();


  });
});
