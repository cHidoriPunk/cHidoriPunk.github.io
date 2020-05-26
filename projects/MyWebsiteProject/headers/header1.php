<!doctype html>
<html lang="en">
<head>
    <title>Hi</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/bootstrap4/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/bootstrap4/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="<?php getHeaderClass(); ?>">

<header>
    <div class="jumbotron">
        <div class="container">
            <h1>My Website</h1>
        </div>
    </div>
</header>
<main>
    <div class="container">
        <nav class="nav">
            <a class="nav-link active" href="<?php echo basename($_SERVER['PHP_SELF']); ?>">Home</a>
            <a class="nav-link" href="#paragraphs">Paragraphs</a>
            <a class="nav-link" href="#listExample">Ordered List</a>
            <a class="nav-link" href="#tableExample">Table Example</a>
            <a class="nav-link" href="#registrationLink">Registration</a>
        </nav>
    </div>