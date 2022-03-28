<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Job05 jour 05</title>
</head>
<body>
<h1>Bonjour <?php if(isset($_SESSION['prenom'])){echo $_SESSION['prenom'] ; } ?></h1>
<p id="indexMessage"></p>

<?php if(!isset($_SESSION['prenom'])){?>
    <div>
        <a class="btn" href="connexion.php">Connexion</a>
        <a class="btn" href="inscription.php">Inscription</a>
    </div>

<?php } ?>
</body>
</html>