$(function ()
{
    let board = ['', '', '', '', '', '', '', '', ''];
    let placedBoard = 0;
    var isGameRunning = true;
    var returnVal = "Remis";
    let actSign = 'O';
    let numWins = 0;

    const winState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    function onEnd(s)
    {
        alert(s);
    }

    $(document).on('click', '#reset', function()
    {
        board = ['', '', '', '', '', '', '', '', ''];
        placedBoard = 0;
        isGameRunning = true;
        returnVal = "Remis";
        actSign = 'O';
        $(".tile").text("");
    });
    
        
    $(".tile").click(function(){
        if(isGameRunning)
        {
            let id = $(this).attr('id');
            if(board[id] == '')
            {
                var rnd = Math.floor(Math.random() * 8.99);
                board[id] = actSign;
                $(this).text(actSign);
                if(actSign == 'O')
                {
                    actSign = 'X';
                }
                else
                {
                    actSign = 'O';
                }
                placedBoard++;
                if(placedBoard > 8)
                {
                    for(var i = 0; i<8; i++)
                    {
                        if(board[winState[i][0]] == '')
                        {
                            continue;
                        }
                        else
                        {
                            var sign = board[winState[i][0]];
                            var isWin = true;
                        }
                        for(var j = 0; j<3; j++)
                        {
                            if(board[winState[i][j]] != sign)
                            {
                                isWin = false;
                                break;
                            }
                        }
                        if(isWin)
                        {
                            isGameRunning = false;
                            if(sign == 'O')
                            {
                                returnVal = "Wygrana";
                                onEnd(returnVal);
                                return;
                            }
                            else
                            {
                                returnVal = "Przegrana";
                                onEnd(returnVal);
                                return;
                            }
                            break;
                        }
                    }
                    isGameRunning = false;
                    onEnd(returnVal);
                    return;
                }
                if(isGameRunning)
                {
                    while(board[rnd] != '')
                    {
                        rnd = Math.floor(Math.random() * 8.99);
                    }
                    board[rnd] = actSign;
                    $("#"+rnd).text(actSign);
                    if(actSign == 'O')
                    {
                            actSign = 'X';
                    }
                    else
                    {
                            actSign = 'O';
                    }
                    placedBoard++;
                    }
            }

            for(var i = 0; i<8; i++)
            {
                if(board[winState[i][0]] == '')
                {
                    continue;
                }
                else
                {
                    var sign = board[winState[i][0]];
                    var isWin = true;
                }
                for(var j = 0; j<3; j++)
                {
                    if(board[winState[i][j]] != sign)
                    {
                        isWin = false;
                        break;
                    }
                }
                if(isWin)
                {
                    isGameRunning = false;
                    $.get("gamePaused.txt", function(data, status){
                        $(".gamePaused").html(data);
                    });

                    if(sign == 'O')
                    {
                        returnVal = "Wygrana";
                        numWins++;
                        $("#score").text("Wynik: " + numWins);
                        onEnd(returnVal);
                        return;
                    }
                    else
                    {
                        returnVal = "Przegrana";
                        onEnd(returnVal);
                        return;
                    }
                    break;
                }
            }
        }
        });
});
