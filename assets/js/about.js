
dpip.controller( 'AboutController', function ($scope) {

    // X oauth2 Gmail Nodemailer++++++++++++++++++++++++++++++++++

    var from,to,subject,text;

    $("#send_email").click(function(){

        to = "dpip.nc@gmail.com" ;
        subject = $("#name").val() + " + " + $("#email").val() + " + " + $("#subject").val();
        text = $("#content").val();

            $("#message").text("Shhh...It's sending");

      $.get("http://localhost:3002/send",{to:to,subject:subject,text:text},function(data){

        if(data=="sent") {
          $("#message").empty().html("Sent to "+to+" .");
          }

      });

    });

      // end Nodemailer++++++++++++++++++++++++++++++++++++++++++++++


            // GITHUB
            $('.git-commits').hide();
            $('#m1').hover(function() {
                $(this).toggleClass('git-hover');
                $('.git-commits').toggle();
              });
            // LINKEDIN
            $('#m2').hover(function() {
                $(this).toggleClass('in-hover');
              });
            // TWITTER
            $('#m3').hover(function() {
                $(this).toggleClass('tweet-hover');
              });
            // EIGHTTRACKS
            $('#m4').hover(function() {
                $(this).toggleClass('eightTracks-hover');
              });
            // INSTAGRAM
            $('#m5').hover(function() {
                $(this).toggleClass('insta-hover');
              });



            // On click window routing for personal media

            var git = "https://github.com/dpip";
            var linkedIn = "https://www.linkedin.com/in/daniel-pipkin-a77555116";
            var twitter = "https://twitter.com/pipmoffett";
            var eightTracks = "http://8tracks.com/mix_sets/liked:1044774/1";
            var instagram = "https://www.instagram.com/dpipnc/?hl=en";

            $('#m1').click(function() {
              window.location.href = git ;
            });

            $('#m2').click(function() {
              window.location.href = linkedIn ;
            });

            $('#m3').click(function(){
              window.location.href = twitter ;
            })

            $('#m4').click(function(){
              window.location.href = eightTracks ;
            })

            $('#m5').click(function(){
              window.location.href = instagram ;
            })

});
