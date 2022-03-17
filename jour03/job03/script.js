document.addEventListener('DOMContentLoaded', function() {
    function swap(a, b) {
        a = $(a); b = $(b);
        var tmp = $('<span>').hide();
        a.before(tmp);
        b.before(a);
        tmp.replaceWith(b);
    };

    var element = ['1', '2', '3', '4', '5', '6', '7', '8'];

    var rdmImg = element.sort(() => Math.random() - 0.5)

    function shuffle() {
        for(var i = 0; i < element.length; i++) {  
            $('<img class="'+ rdmImg[i] +'" src="'+ rdmImg[i] +'.png"></img>').appendTo('.content');
            if(i + 2 == 9) {
                i = i + 2;
                $('<div class="'+ i +'"></div>').appendTo('.content');
            }
        }
    }

    shuffle();

    $('img').append('.content').click(function() {
        if($(this).position().top + 293 == $('.9').position().top && $(this).position().left == $('.9').position().left) {
            if($('.9').is('div')) {
                swap($(this), $('.9'))
                console.log('top')
            }
        } else if($(this).position().top - 293 == $('.9').position().top && $(this).position().left == $('.9').position().left) {
            if($('.9').is('div')) {
                swap($(this), $('.9'))
                console.log('bottom')
            }
        } else if($(this).position().left + 293 == $('.9').position().left && $(this).position().top == $('.9').position().top) {
            if($('.9').is('div')) {
                swap($(this), $('.9'))
                console.log('left')
            }
        } else if($(this).position().left - 293 == $('.9').position().left && $(this).position().top == $('.9').position().top) {
            if($('.9').is('div')) {
                swap($(this), $('.9'))
                console.log('right')
            }
        }

        if($('.content').html() == '<img class="1" src="1.png"><img class="2" src="2.png"><img class="3" src="3.png"><img class="4" src="4.png"><img class="5" src="5.png"><img class="6" src="6.png"><img class="7" src="7.png"><img class="8" src="8.png"><div class="9"></div>') {
            $('<h1 id="win">Vous avez gagné la partie !</h1>').appendTo('#container');
            $('.9').replaceWith('<img class="9" src="9.png"></img>');
            $('<button id="btn">Relancer</button>').appendTo('#container');

            $('#btn').click(function() {
                $('img').remove();
                $('#btn').remove();
                $('#win').remove();
                shuffle()
            })
        }
    });
});