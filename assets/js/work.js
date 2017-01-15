dpip.controller( 'WorkController', function ($scope) {

$(document).ready(function() {

  $('.trindy-hover').addClass('hide');

  $('#trindy-work').hover(function() {
    console.log('skdfadf');
    $('.trindy-hover').removeClass('hide')
  }, function() {
    $('.trindy-hover').addClass('hide');
});

});



});
