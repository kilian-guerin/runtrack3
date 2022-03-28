'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    'use strict';

    var p = document.querySelector('p')
    var btn = document.querySelector('#button')
    var select = document.querySelector('#type')
    var id = document.querySelector('#id')
    var name = document.querySelector('#name')
    var selects = document.querySelectorAll('select')
    var select = document.querySelector('select')

    function fetchFilter(selected, id, name ){

    }

    fetchInfosFrontLoad();

// AFFICHER LES ELEMENTS DE LA LISTE DÉROULANTE
function fetchInfosFrontLoad(){

    fetch('pokemon.json')
    .then(function(response) {
        return(response.json())
    })
    .then(function(response){
        var dataJson = response

        var  types =[];
        for(var i = 0 ; i< dataJson.length; i++){
            for(var j=0; j < dataJson[i].type.length; j++){
                if(!types.includes(dataJson[i].type[j])){
                    types.push(dataJson[i].type[j])
                }
            }
        }
        for(var k = 0; k < types.length ; k++){;
            select.innerHTML += "<option value="+types[k] +">"+ types[k]+"</option>"
        }

// LORSQU'ON CLICK SUR LE BOUTON FILTRE

        btn.addEventListener('click', function(){
                p.innerHTML = " "
            
        //    var filted =  fetchFilter(selects, id, name );
           var arrayResult = [];


           if(name.value != "" || id.value != "" || select.value != ""){

            for(var i = 0 ; i< dataJson.length; i++){
                for(var j=0; j < dataJson[i].type.length; j++){
                    if((dataJson[i].type[j] == select.value )||( dataJson[i].id == id.value) || (dataJson[i].name.french == name.value )){
                        if(!arrayResult.includes(dataJson[i])){
                            arrayResult.push(dataJson[i]);
                        }
                        //  console.log(dataJson[i])
                    }
                 }

     
             }

             var k = 0;
             do {

                let span = document.createElement('span');
                console.log(arrayResult[k].id)

                for(var j=0; j < arrayResult[k].type.length; j++){

                    span.innerHTML = arrayResult[k].name.french + " id :  "+ arrayResult[k].id + " je suis de type : "+ arrayResult[k].type[j]
                }
                p.appendChild(span) ;
                 k++
             } while (arrayResult);




        }
  
           else{
               console.log('pas bon')
           }

        })

    })
    .catch(function(error){
        console.log(error);

    })

}




})