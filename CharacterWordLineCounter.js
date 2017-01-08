    $(document).ready(function () {
        //Select Text Box
        var textbox = $('#textbox');
        //Select Counter Div
        var counterDiv=$(".counter");
        //Focus On TexBox Filed After Load Document
        textbox.focus();
        //Count On Writing...
        addEventListener('input',function () {
            //Add A Class For Showing Counters
            counterDiv.addClass(' blue');
            //Count Characters With Space
            var charactersS = textbox.val().length;
            //Count Characters Without Space
            var charactersWS = textbox.val().replace(/\s+/g, '').length;
            //Count Words
            var wordsC = textbox.val().match(/\S+/g);
            var words = wordsC ? wordsC.length : 0;
            //Count Lines
            var lines = textbox.val().split(/\n/).length;
            //Print Counts
            counterDiv.html('Characters With Space: ' + charactersS + '<br>'
                    + 'Characters Without Space: ' + charactersWS + '<br>'
                    + 'Words: ' + words + '<br>'
                    + 'Lines: ' + lines);
            });
        });