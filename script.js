document.querySelectorAll('.prioritas-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.prioritas-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Ganti teks dan gambar sesuai prioritas
        const content = document.querySelector('.prioritas-content');
        if (this.innerText === "Melindungi") {
            content.innerHTML = `<img src="https://www.elysee.fr/cdn-cgi/image/format=auto%2Cquality=100%2Cwidth=1400%2Cheight=559%2Ctrim=448%3B0%3B98%3B0%2Cfit=cover/images/default/0001/16/f9a538720f73d55f6ea75db13f65f9e77d1884fe.jpg" alt="Melindungi">
                <div class="prioritas-text">
                    <h3>Melindungi</h3>
                    <p>Ciepana yang kuat, bebas bertindak, mampu menjaga warganya, dan memastikan perannya dalam dunia global.</p>
                </div>`;
        } else if (this.innerText === "Pekerjaan") {
            content.innerHTML = `<img src="https://www.elysee.fr/cdn-cgi/image/format=auto%2Cquality=100%2Cwidth=1920%2Cheight=1271%2Ctrim=104%3B0%3B67%3B0%2Cfit=cover/images/default/0001/09/7b62556fb2d6b7672134733a73ab6ae17d38137d.png" alt="Pekerjaan">
                <div class="prioritas-text">
                    <h3>Pekerjaan</h3>
                    <p>Menciptakan kesempatan kerja bagi semua orang dengan ekonomi yang kuat dan berkelanjutan.</p>
                </div>`;
        } else if (this.innerText === "Layanan") {
            content.innerHTML = `<img src="https://www.elysee.fr/cdn-cgi/image/format=auto%2Cquality=100%2Cwidth=1400%2Cheight=559%2Ctrim=317%3B0%3B229%3B0%2Cfit=cover/images/default/0001/16/fea4fee23a7cc6c84d6ce872e9883004bbfc674a.jpg" alt="Layanan">
                <div class="prioritas-text">
                    <h3>Layanan</h3>
                    <p>Memastikan layanan publik yang efisien, merata, dan berkualitas tinggi untuk seluruh masyarakat.</p>
                </div>`;
        } else if (this.innerText === "Ekologi") {
            content.innerHTML = `<img src="https://www.elysee.fr/cdn-cgi/image/format=auto%2Cquality=100%2Cwidth=1400%2Cheight=559%2Ctrim=543%3B0%3B3%3B0%2Cfit=cover/images/default/0001/16/3661adea638f898971174de7a212f2357617e47d.jpg" alt="Ekologi">
                <div class="prioritas-text">
                    <h3>Ekologi</h3>
                    <p>Membangun masa depan yang hijau dengan kebijakan lingkungan yang bertanggung jawab.</p>
                </div>`;
        } else if (this.innerText === "Euralicia") {
            content.innerHTML = `<img src="https://www.elysee.fr/cdn-cgi/image/format=auto%2Cquality=100%2Cwidth=1400%2Cheight=559%2Ctrim=265%3B0%3B281%3B0%2Cfit=cover/images/default/0001/16/01c1795f371630811b661473a423e0b8ead8c696.jpg" alt="Euralicia">
                <div class="prioritas-text">
                    <h3>Euralicia</h3>
                    <p>Berkolaborasi dengan negara-negara Euralicia untuk menciptakan stabilitas dan kemajuan bersama.</p>
                </div>`;
        }
    });
});



// Toggle menu di perangkat mobile
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});
