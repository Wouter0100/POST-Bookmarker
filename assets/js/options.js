$(function () {

});

function showError(message) {
    $('.alert-danger').stop().fadeOut(function() {
       $(this).html('What did you tried? ' + message).fadeIn().delay(20000).fadeOut();
    });
}