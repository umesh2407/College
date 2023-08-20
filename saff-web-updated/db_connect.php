<?php
$host = 'localhost'; // Replace with your hostname
$user = 'root';      // Replace with your database username
$password = '';      // Replace with your database password
$database = 'contact_data'; // Replace with your database name

$connection = mysqli_connect($host, $user, $password, $database);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
<?php
// Include the database connection
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql = "INSERT INTO query (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

    if (mysqli_query($connection, $sql)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }

    // Close the database connection
    mysqli_close($connection);
}
?>
