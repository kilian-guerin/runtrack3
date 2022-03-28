<?php
        try {
            $db = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', 'root');
            //On définit le mode d'erreur de \PDO sur Exception
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }

        $sql = 'SELECT * FROM utilisateurs';
        $req= $db -> prepare($sql);
        $req->execute();
        $users = $req->fetchAll();




        echo json_encode($users);
?>