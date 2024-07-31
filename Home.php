<?php
session_start();
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manajemen Event</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $deskripsi = "Bruno Mars will be performing at the stadium on 17 August 2024";
    $about = "Kami menyediakan layanan lengkap dalam mengelola berbagai jenis event, dari konferensi hingga konser.";
    ?>    
    <header>
        <h1>Selamat Datang di Manajemen Event</h1>
        <nav>
            <ul>
                <li><a href="Home.php">Beranda</a></li>
                    <li><a href="dashboard.php">Dashboard</a></li>
                    <li><a href="login.php">Login</a></li>
            </ul>
        </nav>
    </header>
    <div class="card" style="width: 18rem; margin-left: 10px; margin-top: 10px;">
  <img style="width: 100%; height: 100%; object-fit: cover; margin-top: 10px;" src="bruno.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"><?php echo $deskripsi; ?></p>
  </div>
</div>
    <main>
        <section class="about">
            <h2>Tentang Kami</h2>
            <p><?php echo $about; ?></p>
        </section>
    </main>
    <footer>
        <p>Hak Cipta © 2024 Squad Cireng</p>
    </footer>
</body>
</html>