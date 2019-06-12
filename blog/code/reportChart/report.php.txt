<?php
    $csvFile = file('data.csv');
    $data = [];
    foreach ($csvFile as $line) {
        array_push($data, str_getcsv($line));
    }
    header('Content-Type: application/json');
    echo json_encode(array(
        data => $data
    ));
?>
