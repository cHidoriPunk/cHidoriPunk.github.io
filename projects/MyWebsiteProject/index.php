<?php
//call the header template
require('general.php');
require('headers/header1.php');
?>

<div class="container">

    <section id="paragraphs">
        <header>
            <h1>Paragraphs</h1>
        </header>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Paragraph 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida lacinia turpis, et auctor tortor accumsan sit amet. Quisque convallis imperdiet diam, pulvinar fermentum ligula efficitur sit amet. Donec felis elit, lacinia sed blandit tincidunt, placerat eget nunc. Sed sed orci bibendum, porttitor odio nec, tincidunt felis.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Paragraph 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida lacinia turpis, et auctor tortor accumsan sit amet. Quisque convallis imperdiet diam, pulvinar fermentum ligula efficitur sit amet. Donec felis elit, lacinia sed blandit tincidunt, placerat eget nunc. Sed sed orci bibendum, porttitor odio nec, tincidunt felis.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Paragraph 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida lacinia turpis, et auctor tortor accumsan sit amet. Quisque convallis imperdiet diam, pulvinar fermentum ligula efficitur sit amet. Donec felis elit, lacinia sed blandit tincidunt, placerat eget nunc. Sed sed orci bibendum, porttitor odio nec, tincidunt felis.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Paragraph 4</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida lacinia turpis, et auctor tortor accumsan sit amet. Quisque convallis imperdiet diam, pulvinar fermentum ligula efficitur sit amet. Donec felis elit, lacinia sed blandit tincidunt, placerat eget nunc. Sed sed orci bibendum, porttitor odio nec, tincidunt felis.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Paragraph 5</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida lacinia turpis, et auctor tortor accumsan sit amet. Quisque convallis imperdiet diam, pulvinar fermentum ligula efficitur sit amet. Donec felis elit, lacinia sed blandit tincidunt, placerat eget nunc. Sed sed orci bibendum, porttitor odio nec, tincidunt felis.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h2>Paragraph 6</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida lacinia turpis, et auctor tortor accumsan sit amet. Quisque convallis imperdiet diam, pulvinar fermentum ligula efficitur sit amet. Donec felis elit, lacinia sed blandit tincidunt, placerat eget nunc. Sed sed orci bibendum, porttitor odio nec, tincidunt felis.</p>
            </div>
        </div>
    </section>

    <section id="listExample">
        <header>
            <h1>Ordered List</h1>
        </header>
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-md-6">
                <ol>
                    <li class="list-group-item">List Item 1</li>
                    <li class="list-group-item">List Item 2</li>
                    <li class="list-group-item">List Item 3</li>
                    <li class="list-group-item">List Item 4</li>
                    <li class="list-group-item">List Item 5</li>
                    <li class="list-group-item">List Item 6</li>
                </ol>
            </div>
        </div>
    </section>

    <section id="tableExample">
        <header>
            <h1>Table</h1>
        </header>
        <table class="table table-hover table-bordered table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
            </tr>
            </thead>
            <tbody class="tbody-light">
            <tr>
                <th scope="row">1</th>
                <td>daniel</td>
                <td>kalaora</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>user2</td>
                <td>user2 family name</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">user 3</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </section>

    <section id="registrationLink">
        <header>
            <h1>Registration</h1>
        </header>
        <div class="text-center">
            <a href="registration.php" class="btn btn-primary btn-lg">To Registration Form</a>
        </div>
    </section>

</div>

</main>
<?php
// call the footer template
require('footer.php');
?>
</body>
</html>