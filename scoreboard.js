$(function ()
{
    $.get( "scores.txt", function( data ) {
        var i = 0;
        str = "";
        while(data[i] != null)
        {
            if(data[i] != ' ')
            {
                str += data[i];
                i++;
            }
            else
            {
                alert(str);
                str = "";
                i++;
            }
        }
    });
});