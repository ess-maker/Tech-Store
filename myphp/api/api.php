<?php 
    header("Access-Control-Allow-Origin: *");
    $data = array (
        'message' => 'hello from php'
    );
    echo json_encode($data);
?>
