<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
        <header>
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Inscription</a></li>
                    <li><a href="#">Connexion</a></li>
                    <li><a href="#"><i class="material-icons">search</i></a></li>
                </ul>
                </div>
            </nav>
        </header>
        <main>
            <div class="row col s12" style="padding: 1% 30px" >
            <h1> Formulaire</h1>
                <form class="col s6 offset-s3" >
                    <fieldset  class="row col s12" style="border: none;">
                        <legend>Votre civilité</legend>
                        <p class="input-field col s3">
                            <label>
                                <input class="with-gap" name="civilite" type="radio" />
                                <span>Madame</span>
                            </label>
                        </p>
                        <p class="input-field col s3">
                            <label>
                                <input class="with-gap" name="civilite" type="radio" />
                                <span>Mademoiselle</span>
                            </label>
                        </p>
                        <p class="input-field col s3">
                            <label>
                                <input class="with-gap" name="civilite" type="radio" />
                                <span>Monsieur</span>
                            </label>
                        </p>
                    </fieldset>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate">
                            <label for="first_name">Prénom</label>
                        </div>
                    <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate">
                            <label for="last_name">Nom</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate">
                            <label for="email">Email</label>
                            </div>
                        </div>
                    </div>
                    <div class="row s9">
                        <div class="input-field col s3 offset-s3" style="margin-left: 26%;">
                            <input id="password" type="password" class="validate">
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field col s3  ">
                            <input id="password2" type="password" class="validate">
                            <label for="password2">Confirm password</label>
                        </div>
                    </div>
                    <fieldset class="row col s12" style="border: none;">
                        <h5 class="text-bold center-align">Vos loisirs</h5>
                        <p class="input-field col s2 offset-s3">
                            <label>
                                <input name="loisir" value="sport" type="checkbox" />
                                <span>Sport</span>
                            </label>
                        </p>
                        <p class="input-field col s2">
                            <label>
                                <input name="loisir" value="lecture" type="checkbox" />
                                <span>Lecture</span>
                            </label>
                        </p>
                        <p class="input-field col s2">
                            <label>
                                <input name="loisir" value="dessin" type="checkbox" />
                                <span>Dessin</span>
                            </label>
                        </p>
                    </fieldset>
                    <div class="row col s12" >
                        <button style="margin-top:15px; margin-bottom:10%" class="col s2 offset-s7 btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>

        </main>
        <footer>
            
        </footer>
    </body>
  </html>
