'use strict';

document.addEventListener('DOMContentLoaded', function loader(){

    var tbody = document.querySelector('tbody');
    var btn = document.querySelector('button');
    fetchUser();

    function fetchUser(){
        tbody.innerHTML = ""
        fetch("user.php")
            .then((response) => response.json())
            .then((response) => {
                var dataUser = response
                for(let element of dataUser){
                let tr = document.createElement('tr');
                let tdLastName = document.createElement('td');
                let tdFirstName = document.createElement('td');
                let tdEmail= document.createElement('td');
                tdLastName.innerHTML = element.nom
                tdFirstName.innerHTML = element.prenom
                tdEmail.innerHTML = element.email
                tbody.appendChild(tr) ;
                tr.appendChild(tdFirstName) ;
                tr.appendChild(tdLastName) ;
                tr.appendChild(tdEmail) ;
                }
            })
            .catch(function(error){
            console.log(error)
        })

    }

    btn.addEventListener('click', fetchUser)

})