
dpip.controller( 'AboutController', function ($scope) {

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

});
