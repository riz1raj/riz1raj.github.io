$(document).ready(function(){
        $("#submit").click(function(){
            var name= $("#name").val();
            var pass = $("#pass").val();
            if(name == '' || pass == ''){
                $("#Required").html('All Feild Are Required').css('color','red');
            }else if(name == 'raj' && pass == '103353'){
                 $("#form").html('<h4><a href="aaa.html">Here is the link to that page</a>').css('color','green');
             }else{
                 $("#error").html('User Are Not Valid');
             }
        });
    });