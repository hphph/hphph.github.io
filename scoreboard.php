<?php
    if(file_exists("scores.txt"))
    {
        $input = fopen("scores.txt");
    }
    $name = "";
    $pkt = 0;
    while($rowinfo = fscanf($input, "%s %d"))
    {
        echo <tr>;
        echo <th> . name . </th>;
        echo <th> . pkt . </th>;
        echo </tr>;
    }

?>