dpip.controller( 'LandController', function ($scope) {


    $( document ).ready(function(){

      console.log("here's the fun part!");

      $('#work').hover(function(){

            $(this).css({'border': '3px solid white'});
            $('.work-icon').fadeIn("500");
            }, function (){
            $(this).css({'border': '3px solid rgba(26, 188, 156, 1)'});
            $('.work-icon').fadeOut("100");

      })

      $('#about').hover(function(){

            $(this).css({'border': '3px solid white'});
            // $('.work-icon').fadeIn("700");
         }, function (){
            $(this).css({'border': '3px solid rgba(26, 188, 156, 1)'});
            // $('.work-icon').fadeOut("200");

      })


  });

});
