document.addEventListener('DOMContentLoaded', function() {
    var img = ["arc1.png", "arc2.png", "arc3.png", "arc4.png", "arc5.png", "arc6.png"];
    
    function random() {
        $('img').remove();

        var rdmImg = img.sort(() => Math.random() - 0.5)

        for(var i = 0; i < img.length; i++) {
            $('<img class="test" src="'+ rdmImg[i] +'"></img>').appendTo('#melangees');
        }
    }

    $('#button').click(function() {
        random();
        
        $('img.test').append("#rangees").click(function() {
            if($(this).attr('class')) {
                $(this).removeAttr('class').appendTo("#rangees");
            }
            if($('#rangees img').length == 6) {
                if($('#rangees').html() == '<img src="arc1.png"><img src="arc2.png"><img src="arc3.png"><img src="arc4.png"><img src="arc5.png"><img src="arc6.png">') {
                    $('#status').html('Gagné')
                } else {
                    $('#status').html('Perdu')
                }
            }
        });
    });
});