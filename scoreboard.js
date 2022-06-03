$(function ()
{
    $.get( "scores.txt", function( data ) {
        var i = 0;
        var str = "";
        var htmlTxt = "";
        var isName = true;
        while(data[i] != null)
        {
            if(data[i] != ' ')
            {
                str += data[i];
                i++;
            }
            else
            {
                $("p1").text(str);
                alert(str);
                if(isName)
                {
                    htmlTxt = $("table").html();
                    htmlTxt += "\n<tr>\n";
                    htmlTxt = htmlTxt + "<th>" + str + "</th>\n";
                    isName = false;
                }
                else
                {
                    htmlTxt = htmlTxt + "<th>" + str + "</th>\n";
                    htmlTxt += "</tr>";
                    isName = true;
                }
                str = "";
                i++;
            }
            $("table").text(htmlTxt);
        }
    });
});