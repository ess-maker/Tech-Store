<?php
include 'api.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("content-type: application/json");

// Check if the POST request contains the 'username' field
if (isset($_POST['username'])) {
    // Get the values sent from React
    @$username = $_POST['username'];
    @$email = $_POST['email'];
    @$password = $_POST['password'];
    @$name = $_POST['name'];
    @$lastname = $_POST['lastname'];

    @$filename = $_FILES["img"]["name"];
    @$tempname = $_FILES["img"]["tmp_name"];
    @$folder = "../img/" . $filename;
    @$file_type = $_FILES['img']['type'];
    $allowed = array("image/jpeg", "image/gif", "image/png");

    // Check if the file type is not allowed
    if (!(in_array($file_type, $allowed))) {
        echo json_encode(["message" => 'Only jpg, gif, and png files are allowed.']);
    } else {
        // Move the uploaded file to the destination folder
        if (move_uploaded_file($tempname, $folder)) {
        } else {
            echo json_encode(["message" => 'An error occurred while uploading the file. Please try again.']);
        }
        if (empty($username) || empty($email) || empty($password) || empty($name) || empty($lastname)) {
            echo json_encode(["message" => 'Please Enter A username']);
        }
        $select = "SELECT * FROM signup WHERE email = '$email' OR username =  '$username'";
        $res = $conn->query($select);
        if ($res->num_rows > 0) {
            echo json_encode(["message" => 'Email Or username Already Exists']);
        } else {
            $sql = "INSERT INTO signup (username, email, password, name,lastname, img) VALUES ('$username', '$email', '$password', '$name','$lastname', '$filename')";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["message" => "Registration successful"]);
            } else {
                echo json_encode(["message" => "Database error: " . $conn->error]);
            }
        }
    }
} else {
    echo json_encode(["error" => "No data received"]);
}

