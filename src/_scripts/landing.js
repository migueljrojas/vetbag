'use strict';

// Constructor
var Landing = function() {
    var context = $('.landing');

    if (context.length > 0) {
        console.log('landing');
        
        var studentFile = $('#studentFile');
        var vetFile = $('#vetFile');
        var studentLabel = $('[for="studentFile"');
        var vetLabel = $('[for="vetFile"');
        var vetRadio = $('#vetRadio');
        var studentRadio = $('#studentRadio');        
        var vetSection = $('#vet');
        var studentSection = $('#student');

        studentFile.on('change', function() {
            var value = $(this).val().replace('C:\\fakepath\\', '');

            studentLabel.find('.txt').html(value);
        });

        vetFile.on('change', function() {
            var value = $(this).val().replace('C:\\fakepath\\', '');

            vetLabel.find('.txt').html(value);
        });

        vetRadio.on('change', function() {
            var checkedState = $(this).val();
            
            checkedState === 'on' ? vetSection.addClass('-active') : vetSection.removeClass('-active');
            studentSection.removeClass('-active');

            studentFile.val(null);
            studentLabel.find('.txt').html('Subir carnet estudiantil o documento de acreditación');
        });

        studentRadio.on('change', function() {
            var checkedState = $(this).val();

            checkedState === 'on' ? studentSection.addClass('-active') : studentSection.removeClass('-active');
            vetSection.removeClass('-active');

            vetFile.val(null);
            vetLabel.find('.txt').html('Subir título MV o documento de acreditación');
        });
    }
};

module.exports = Landing;