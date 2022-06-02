$(function ()
{
    $.get( "scores.txt", function( data ) {
        alert(data);
    });
});