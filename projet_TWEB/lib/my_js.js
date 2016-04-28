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
    
    
    
    
    
    
    
    
    
    
    
    
});
