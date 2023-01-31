<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['sender_id']) && isset($_POST['recipient_id']) && isset($_POST['content'])) {
    $sender_id = $_POST['sender_id'];
    $recipient_id = $_POST['recipient_id'];
    $content = $_POST['content'];

    $sql = "INSERT INTO messages (sender_id, recipient_id, content, timestamp)
    VALUES ('$sender_id', '$recipient_id', '$content', NOW())";

    if (mysqli_query($conn, $sql)) {
        echo "Message sent successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);

?>