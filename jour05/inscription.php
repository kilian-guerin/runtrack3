<?php session_start();

if(isset($_POST['firstName'])){
    $firstname = htmlspecialchars( $_POST['firstName']);
    $lastname= htmlspecialchars( $_POST['lastName']);
    $email= htmlspecialchars($_POST['email']);
    $password= htmlspecialchars($_POST['password1']);

    register($firstname, $lastname, $email, $password);
    header('Location:connexion.php');

}

function register($firstname, $lastname, $email, $password) {
    $db = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', 'root');

    $sql = " INSERT INTO `utilisateurs` ( `nom`, `prenom`, `email`, `password`) VALUES (?, ? , ? , ?)";
    $req = $db -> prepare($sql);
    $req-> execute([$firstname, $lastname, $email, $password]);
    var_dump(' bien inscrit ');


}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
    <h1>Inscription</h1>
    <form id="register" action="inscription.php" method="post">
        <fieldset>
            <fieldset>

                <label for="prenom">Prenom</label>
                <input type="text" name="firstName" id="prenom">
            </fieldset>
            <fieldset>
                <label for="prenom">Nom</label>
                <input type="text" name="lastName" id="nom">

            </fieldset>
            <fieldset>

                <label for="prenom">Email</label>
                <input type="email" name="email" id="email">
            </fieldset>
            <fieldset></fieldset>
            <fieldset>
                <label for="prenom">Password</label>
                <input type="password" name="password1" id="password1">
            </fieldset>
            <fieldset>

                <label for="prenom">Confirmez</label>
                <input type="password" name="password2" id="password2">
            </fieldset>
        </fieldset>
        <button class="btn" type="submit">S'inscrire</button>
    </form>



    <section>
            <p class="validateName">
                <b>Votre prenom et nom ne doivent pas contenir de chiffre. </b> <br> Les seuls characteres spécial acceptés sont : ', - et espace</p>
            <p class="validatePassword"> 
            <b>Votre mot de passe doit contenir au moins :</b>
                <span> 1 charactere spécial</span>
                <span> 3 minuscules </span>
                <span> 3 majuscules </span>
                <span> 2 chiffres </span>
                <span> 1 charactere spécial</span>
            <p></p>
    </section>
</body>
</html>