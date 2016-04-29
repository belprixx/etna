/**
 * Created by theo on 26/04/16.
 */
$(document).ready(function(){
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
    $('#contact_form').click(function () {
        console.log('cc');

        if ($('#prenom').val() != '' && $('#nom').val() != '' && $('#mail').val() != '')
        {
            console.log('toto');
            $('#alert_contact_success').show()
        }
        else
        {
            $('#alert_contact_fail').show();
        }
    });
    $('#connect').click(function() {
        if ($('#login').val() != '' && $('#pswd').val() != '')
        {
            localStorage.setItem("connected",true);
            $(location).attr('href',"profil.html");
        }
        else
        {
            $('#alert_login_fail').show();
        }
    });
    
   $('#exit').click(function() {
       localStorage.setItem("connected",true);
   });

   $('#nav_deco').click(function() {
        localStorage.connected = false;
   });

   if (localStorage.connected == "true")
   {
       $('#nav_log').show();
       $('#nav_deco').show();
       $('#co').hide();
   }
   else
   {
       $('#nav_log').hide();
       $('#nav_deco').hide();
       $('#co').show();
   }


});
