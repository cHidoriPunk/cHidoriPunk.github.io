<?php
//call the header template
require('general.php');
require('headers/header2.php');
?>
<main>
    <div class="container">
        <section class="text-center">
            <h1 class="fade">Assignment Done !</h1>
            <button id="assignmentDone" type="button"><span class="oi oi-check"></span></button>
        </section>
    </div>
</main>
<?php
// call the footer template
require('footer.php');
?>
<script>
    var myModal = $('#myModal');
    myModal.find('.modal-title').html('Registration Successful');
    myModal.find('.modal-body').html('<p>Thank you for registring please enjoy this little game</p>');
    myModal.modal('show');
</script>
</body>
</html>