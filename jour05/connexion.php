<?php session_start();

if(isset($_POST['email'])){
    $email= htmlspecialchars($_POST['email']);
    $password= htmlspecialchars($_POST['password1']);

    $user = login($email, $password);
    if(!$user){
        $msg = '<p class="error "> Mauvais mot de passe / login</p>';
    }else{
        $_SESSION['prenom'] = $user['prenom'];
        header('Location:index.php');
    }
}
function login($email, $password){
    $db = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', 'root');
    $sql = "SELECT * FROM utilisateurs WHERE email = ? AND password = ?";
    $req = $db->prepare($sql);
    $req->execute([$email, $password]);
    $user = $req->fetch();
    return $user;
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
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>
    <form id="login" action="connexion.php" method="post">
        <fieldset>
            <fieldset>
                <label for="prenom">Email</label>
                <input type="email" name="email" id="email">
            </fieldset>
            <fieldset>
                <label for="prenom">Password</label>
                <input type="password" name="password1" id="password1">
            </fieldset>
        </fieldset>
        <button class="btn" type="submit">Se connecter</button>
    </form>

    <?php if(isset($msg)){
        echo $msg;
    } ?>

    <section>

    </section>
</body>
</html>