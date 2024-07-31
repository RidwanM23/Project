
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Manajemen Acara</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            height: 10000rem;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .dashboard-item {
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .dashboard-item h2 {
            margin-top: 0;
            color: #444;
        }
        body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
}

header {
    background: #0056b3;
    color: white;
    padding: 10px 20px;
    text-align: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

main {
    padding: 20px;
}

.about {
    text-align: center;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

form {
    max-width: 300px;
    margin: 0 auto;
}

label, input {
    display: block;
    margin-bottom: 10px;
}

input {
    width: 100%;
    padding: 5px;
}

button {
    background: #0056b3;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.error {
    color: red;
}

    </style>
</head>
<body>
    <?php
    include "Home.php";
    ?>    

   
   
    <div class="container">
        <h1>Dashboard Manajemen Acara</h1>
        <div class="dashboard-grid">
            <div class="dashboard-item">
                <h2>Acara Mendatang</h2>
                <p>Jumlah acara: 5</p>
                <p>Acara terdekat: Konser Musik, 15 Agustu 2024</p>
            </div>
            <div class="dashboard-item">
                <h2>Peserta Terdaftar</h2>
                <p>Total peserta: 250</p>
                <p>Pendaftaran baru hari ini: 15</p>
            </div>
            <div class="dashboard-item">
                <h2>Pendapatan</h2>
                <p>Total pendapatan: Rp 50.000</p>
                <p>Pendapatan bulan ini: Rp 3.000.000</p>
            </div>
            <div class="dashboard-item">
                <h2>Tugas</h2>
                <p>Tugas selesai: 20</p>
                <p>Tugas tertunda: 5</p>
            </div>
        </div>
    </div>
</body>
</html>