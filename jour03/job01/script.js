console.log('Loaded');

document.addEventListener('DOMContentLoaded', function() {
    $("#button-show").click(function() {
        $('#text').show()
    });

    $("#button-hide").click(function() {
        $('#text').hide();
    });
});