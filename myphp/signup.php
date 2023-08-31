<?php 
    include 'api.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");
    $data = json_decode(file_get_contents("php://input"));

    $user = $_POST['username'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $fullName = $_POST['fullName'];
    
    $filename = $_FILES["img"]["name"];
    $tempname = $_FILES["img"]["tmp_name"];
    $folder = "../../img/" . $filename;

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (empty($email) || empty($user) || empty($pass) || empty($fullName)) {
            echo json_encode(["EmptyErrMessage" => "Please Enter Fill All Fields"]);
        } else {
            $sql_sel = "SELECT * FROM signup  WHERE email = '$email'";
            $res = $conn->query($sql_sel);
            $sql_select = "SELECT * FROM signup WHERE username = '$user'";
            $result = $conn->query($sql_select);
            
            if ($res->num_rows > 0) {
                echo json_encode(["EmailErrMessage" => "Email Already Exists"]);
            } else if ($result->num_rows > 0) {
                echo json_encode(["UsernameErrMessage" => "Username Already Exists"]);
            } else {
                if (move_uploaded_file($tempname, $folder)) {
                    $sql = "INSERT INTO signup (username,email,password,fullname,img) VALUES ('$user','$email','$pass','$fullName','$filename')";
                    if ($conn->query($sql) === TRUE) {
                        echo json_encode(["message" => "Registration successful"]);
                    } else {
                        echo json_encode(["error" => "Registration failed"]);
                    }
                } else {
                    echo json_encode(["error" => "File upload failed"]);
                }
            }
        }
    }
    
?>


