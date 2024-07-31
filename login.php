<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Manajemen Event</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Login</h1>
    </header>
    <main>
        <form method="post" action="">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit"><a href="Home.php" style="text-decoration: none; color: white;">Login</a></button>
        </form>
        <p>Belum punya akun? <a href="register.php" style="text-decoration: none; color: blue;">Daftar disini</a></p>
        <p>Username <?php isset($_POST['username']) ? print_r($_POST['username']) : ''; ?></p>
        <p>Password <?php isset($_POST['password']) ? print_r($_POST['password']) : ''; ?></p>
    </main>
    <footer>
        <p>Hak Cipta © 2024 Manajemen Event</p>
    </footer>
</body>
</html>