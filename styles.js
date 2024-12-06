/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-// Fungsi untuk menampilkan gambar sertifikat dalam mode pembesaran
    function enlargeCertificate(imgElement) {
        // Membuat elemen modal untuk menampilkan gambar yang diperbesar
        const modal = document.createElement('div');
        modal.classList.add('modal');
    
        const modalImg = document.createElement('img');
        modalImg.src = imgElement.src;
        modalImg.classList.add('modal-content');
    
        // Menambahkan elemen modal ke body
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
    
        // Menutup modal ketika mengklik di luar gambar
        modal.addEventListener('click', function() {
            modal.remove();
        });
    }
    
    // Menambahkan event listener ke semua gambar sertifikat
    document.querySelectorAll('.certificate-img').forEach(function(image) {
        image.addEventListener('click', function() {
            enlargeCertificate(image);
        });
    });
    : border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background-color: #0f172a;
    color: #f8fafc;
    line-height: 1.6;
}

header {
    background-color: #0f172a;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .logo {
    font-size: 20px;
    font-weight: bold;
    color: #f8fafc;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: #fbbf24;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #f59e0b;
}

.section {
    text-align: center;
    padding: 50px 20px;
}

.profile-pic {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}

h1 {
    font-size: 2.5rem;
    color: #facc15;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #facc15;
}

p {
    font-size: 1rem;
    margin: 20px 0;
    color: #f3f4f6;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #fbbf24;
    color: #0f172a;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #f59e0b;
}

.certificate {
    font-family: 'Times New Roman', Times, serif;
    font-size: medium;
}

.bar {
    background-color: #1e293b;

    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.progress {
    background-color: #facc15;
    height: 100%;
    transition: width 0.3s ease;
}

footer {
    padding: 20px;
    text-align: center;
    background-color: #0f172a;
    color: #94a3b8;
}

footer a {
    color: #fbbf24;
    text-decoration: none;
    transition: color 0.3s ease;
}

footer a:hover {
    color: #f59e0b;
}
