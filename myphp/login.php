<?php
    include 'api.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");
    $data = json_decode(file_get_contents("php://input"));    

    // its still empty i will work on it
?>