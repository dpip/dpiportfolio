dpip.controller( 'LandController', function ($scope) {


    $( document ).ready(function(){

      console.log("hire me!");

      $('#work').hover(function(){

            $(this).css({'border': '3px solid white'});
            $('.work-icon').fadeIn("500");
            }, function (){
            $(this).css({'border': '3px solid rgba(26, 188, 156, 1)'});
            $('.work-icon').fadeOut("100");

      })

      $('#about').hover(function(){

            $(this).css({'border': '3px solid white'});
            $('#look-at-me').fadeIn("500");
         }, function (){
            $(this).css({'border': '3px solid rgba(26, 188, 156, 1)'});
            $('#look-at-me').fadeOut("100");

      })

      $('.front-and-center').hover(function(){

            $(this).css({'padding': '2em'});
         }, function (){
            $(this).css({'padding': 'none'});
      })


  });

});
