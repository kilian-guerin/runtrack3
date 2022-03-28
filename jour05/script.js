'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    var btnRegister = document.querySelector('#register > button');
    var btnLogin = document.querySelector('#login > button');
    var inputLastName = document.querySelector('#nom');
    var inputFirstName = document.querySelector('#prenom');
    var inputEmail = document.querySelector('#email');
    var inputPassword1 = document.querySelector('#password1');
    var inputPassword2 = document.querySelector('#password2');
    var paraForName = document.querySelector('.validateName');
    var paraForPassword= document.querySelectorAll('.validatePassword  span');
    var formValue = document.querySelector('form');

    //PATTERN REGEX
    let lowercase = /[a-z]/;
    let pattern = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
    let uppercase = /[A-Z]/;
    let digits = /\d/;
    let special_c = /[\w\s]/;
    // if()

    if (btnRegister != null){
        
        // btnRegister.addEventListener('click', function submitBtnRegister(event){
            //condition bidon pour tester le fetch
            // il manque les regex pour faire controler les input
            // event.preventDefault()
            // if(0 == 0){
            var isValide = false
            let pSamePwd = document.createElement('p');
            pSamePwd.innerHTML  =" ";
            var arrayLetterLow = [];
            var arrayLetterUpper = [];
            var arrayDigit = [];
            var arraySpecial = [];
            inputFirstName.addEventListener('keypress', function(event){
                var letter = event.key
                if((lowercase.test(letter))){
                    arrayLetterLow.push(letter);
                    let sumLow = 1;
                    for (let i = 1; i < arrayLetterLow.length; i++) {
                        sumLow = i;
                    }
                    if(sumLow == 2){
                        paraForPassword[2].classList.add('valide')
                    }else{
                        paraForPassword[2].classList.remove('valide')
                        paraForPassword[3].classList.add('error')
                    }
                }

                if((digits.test(letter))){
                    arrayDigit.push(letter);
                    let sumDig = 0;
                    for (let i = 0; i < arrayDigit.length; i++) {
                        sumDig = i;
                    }
                    if(sumDig == 1){
                        paraForPassword[3].classList.add('valide')
                    }else{
                        paraForPassword[3].classList.remove('valide')
                        paraForPassword[3].classList.add('error')
                    }
                }


                if((uppercase.test(letter))){
                    arrayLetterUpper.push(letter);
                    let sumUp = 0;
                    for (let i = 0 ; i < arrayLetterUpper.length; i++) {
                        sumUp = i;
                    }
                    if(sumUp == 2){
                        paraForPassword[1].classList.add('valide')
                    }else{
                        paraForPassword[1].classList.remove('valide')
                        paraForPassword[1].classList.add('error')
                    }
                }

                if((special_c.test(letter))){
                    arraySpecial.push(letter);
                    let sumSpe = 1;
                    for (let i = 1; i < arraySpecial.length; i++) {
                        sumSpe = i;
                    }
                    if(sumSpe == 3){
                        paraForPassword[4].classList.add('valide')
                    }else{
                        paraForPassword[4].classList.remove('valide')
                        paraForPassword[4].classList.add('error')
                    }
                }


            })
            inputPassword2.addEventListener('focusout', function(){
                if( inputPassword2.value !=  inputPassword1.value ){
                    pSamePwd.classList.remove('valide')
                    pSamePwd.innerHTML = 'Les deux mot de passe ne sont pas identiques';
                    pSamePwd.classList.add('error');
                    isValide = false
                }else{
                    pSamePwd.classList.remove('error')
                    pSamePwd.innerHTML = 'Les deux mot de passe sont identiques';
                    pSamePwd.classList.add('valide');
                    isValide = true

                }
                paraForPassword[4].after(pSamePwd)

            })

            if(!isValide){
                inputPassword1.addEventListener('focusout', function(){
                    if( inputPassword2.value !=  inputPassword1.value ){
                        pSamePwd.classList.remove('valide')
                        pSamePwd.innerHTML = 'Les deux mot de passe ne sont pas identiques';
                        pSamePwd.classList.add('error');
                        isValide = false

                    }else{
                        pSamePwd.classList.remove('error')
                        pSamePwd.innerHTML = 'Les deux mot de passe sont identiques';
                        pSamePwd.classList.add('valide');
                        isValide = true
                    }
                    paraForPassword[4].after(pSamePwd)
            
                })

            }

        // }else{
        // // LE FORMDATA PERMET DE RENVOYER COTE PHP LES INFO DU FORMULAIRE RECUPERER COTE FRONT
        // // ET QUAND ÇA ARRIVE SUR LE PAGE DE TRAITEMENT PHP C4EST CONSIDERER COMME UN $_POST NORMAL
        //     fetch('inscription.php', {
        //         method: 'POST',
        //         body: new FormData(formValue)
        //       });

        //     }
        // })
    };
    if (btnLogin != null){
    btnLogin.addEventListener('click', function submitBtnLogin(event) {
        if(1!= 0){
            event.preventDefault();
            console.log('ho');
        }else{
            fetch('connexion.php', {
                method: 'POST',
                body: new FormData(formValue)
              });
        }
    })
    }

})