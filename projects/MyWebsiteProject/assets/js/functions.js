$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');

    $('a[href^="#"]').click(function () {
        var target = $(this.hash);
        if (target.length) {
            jQuery('html,body').animate({
                scrollTop: target.offset().top
            }, 800);
            return false;
        }
    });

    $('#assignmentDone').click(function(){
        $('section h1').addClass('show');
    });

});

function submitForm(){

    var name = $('[name="name"]').val();
    var email = $('[name="email"]').val();
    var country = $('[name="country"]').val();
    var subject = $('[name="subject"]').val();
    var message = $('[name="message"]').val();
    var data = { name: name, email: email, country: country, subject: subject, message: message  };
    $.ajax({
        method: "POST",
        url: "process.php",
        data: data
    })
    .done(function( msg ) {
        var obj = JSON.parse(msg);
        if(obj.error){
            //alert( obj.error );
            var myModal = $('#myModal');
            myModal.find('.modal-title').html('Error');
            myModal.find('.modal-body').html('<p>'+ obj.error +'</p>');
            myModal.modal('show');
        } else if(obj.success == 'true') {
            document.location = 'thankyou.php';
        }
    });
}