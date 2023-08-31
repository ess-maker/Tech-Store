<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");
    $data = json_decode(file_get_contents("php://input"));

    $servername = "localhost";
    $username = "mohamed";
    $password = "5265793Zx!";
    $dbname = "ytclone";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

?>
