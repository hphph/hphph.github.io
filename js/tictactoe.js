$(function ()
{
    let board = ['', '', '', '', '', '', '', '', ''];
    let isGameRunning = true;
    let actSign = 'O';

    const winState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 5],
    ]
    
    $(".tile").click(function(){
        let id = $(this).attr('id');
        if(board[id] == '')
        {
            alert("puste");
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
        }
        else
        {
            alert(board[id]);
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
                alert("Win");
                break;
            }
        }
    });
});
