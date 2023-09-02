<?php
session_start();
include 'api.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("content-type: application/json");

if (isset($_SESSION['login'])) {
    $row = $_SESSION['login'];
    $userData = [
        "name" => $row['name'],
        "lastname" => $row['lastname']
    ];
    echo json_encode($userData);
} else {
    echo json_encode(["message" => "User not logged in"]);
}
?>