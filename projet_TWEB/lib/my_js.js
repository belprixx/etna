/**
 * Created by theo on 26/04/16.
 */
$(document).ready(function(){
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
});
