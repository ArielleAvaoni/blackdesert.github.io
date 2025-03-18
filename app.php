<?php
session_start();

// Check if the user is logged in
if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
    // User is logged in, do not display the "Log In" and "Register" links
} else {
    // User is not logged in, display the "Log In" and "Register" links
    echo '<a href="login.php">Log In</a>';
    echo '<a href="register.php">Register</a>';
}
?>