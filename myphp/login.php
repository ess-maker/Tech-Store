<?php 
session_start();
include 'api.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("content-type: application/json");

$email = $_POST['email'];
$password = $_POST['password'];

// Use prepared statement to prevent SQL injection
$sql = "SELECT * FROM signup WHERE email = ? AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    $_SESSION['login'] = $row;
    echo json_encode(["message" => 'Login Successful'], JSON_FORCE_OBJECT);
    header('Location: ../');
    exit;
} else {
    echo json_encode(["message" => 'Login Failed'], JSON_FORCE_OBJECT);
}
?>