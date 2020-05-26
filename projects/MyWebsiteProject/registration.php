<?php
//call the header template
require('general.php');
require('headers/header.php');
?>
<main>
    <div class="container">
        <form>
            <div class="row">
                <div class="form-group col-md-5">
                    <label for="inputName">Name</label>
                    <input type="text" name="name" class="form-control" id="inputName" placeholder="Your name here" required>
                </div>
                <div class="form-group col-md-5">
                    <label for="inputEmail4">Email</label>
                    <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="Your Email" required>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-4">
                    <label for="inputCountry">Country</label>
                    <input type="text" name="country" class="form-control" id="inputCountry" placeholder="Your Country" required>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputSubject">Subject</label>
                    <input type="text" name="subject" class="form-control" id="inputSubject" required>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-8">
                    <label for="inputMessage">Message</label>
                    <textarea class="form-control" name="message" id="inputMessage" required></textarea>
                </div>
            </div>

            <button type="button" class="btn btn-primary" onclick="submitForm();">Send</button>
        </form>
    </div>
</main>
<?php
    // call the footer template
    require('footer.php');
?>
</body>
</html>