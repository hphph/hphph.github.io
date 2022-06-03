$(function ()
{
    $.get( "scores.txt", function( data ) {
        while(data[i] != '/n')
        {
            alert(data[i]);
        }
    });
});