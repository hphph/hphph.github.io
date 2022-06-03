$(function ()
{
    $.get( "scores.txt", function( data ) {
        var i = 0;
        while(data[i] != '/n')
        {
            alert(data[i]);
            i++;
        }
    });
});