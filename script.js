let menu = document.querySelectorAll("[data-halaman]");
let halaman = document.querySelectorAll(".halaman");

// Fungsi menampilkan halaman
function bukaHalaman(id) {

// Sembunyikan semua halaman
halaman.forEach(function(item) {
    item.classList.remove("aktif");
});

// Hilangkan tanda menu aktif
menu.forEach(function(item) {
    item.classList.remove("aktif");
});

// Tampilkan halaman yang dipilih
let pilihan = document.getElementById(id);

if (pilihan) {
    pilihan.classList.add("aktif");
}

// Aktifkan menu yang dipilih
menu.forEach(function(item) {

    if (item.getAttribute("data-halaman") === id) {
        item.classList.add("aktif");
    }

});

}

// Klik menu
menu.forEach(function(item) {

item.addEventListener("click", function(event) {

    event.preventDefault();

    let tujuan = this.getAttribute("data-halaman");

    bukaHalaman(tujuan);

});

});

// Saat website pertama dibuka
bukaHalaman("home");

// ==================================
// VALIDASI FORMULIR KONSULTASI
// ==================================

let form = document.getElementById("formKonsultasi");

form.addEventListener("submit", function(event) {

event.preventDefault();

let nama = document.getElementById("nama").value.trim();
let email = document.getElementById("email").value.trim();
let telepon = document.getElementById("telepon").value.trim();
let pesan = document.getElementById("pesan").value.trim();

let hasil = document.getElementById("hasil");

// Memeriksa kolom kosong
if (nama === "" || email === "" ||
    telepon === "" || pesan === "") {

    hasil.style.color = "red";
    hasil.innerHTML = "Semua kolom wajib diisi!";
    return;
}

// Memeriksa email
let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!polaEmail.test(email)) {

    hasil.style.color = "red";
    hasil.innerHTML = "Format email tidak valid!";
    return;
}

// Memeriksa nomor telepon
let polaTelepon = /^[0-9+()\-\s]{8,16}$/;

if (!polaTelepon.test(telepon)) {

    hasil.style.color = "red";
    hasil.innerHTML = "Nomor telepon tidak valid!";
    return;
}

// Jika semua data benar
hasil.style.color = "green";

hasil.innerHTML =
    "Terima kasih " + nama +
    ", formulir berhasil divalidasi!";

form.reset();

});