// Ini Javascript External

function validateForm() {
    let nameInput = document.getElementById('name-input');

    // Kondisi Validasinya
    if (nameInput.value == '') {
        alert('Nama tidak boleh kosong');
    } else {
        alert('Welcome ' + nameInput.value);
    }
}

// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
    // Increment IndexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');

    // Reset Condition
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    // Loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    // Show Banner
    banner[indexBanner].style.display = 'block';
}

function showSelectedOption() {
    // Mengambil nilai yang dipilih
    let selectedValue = document.getElementById("destination").value;
    
    // Menampilkan hasil pilihan
    document.getElementById("selected-option").innerText = "Anda memilih: " + selectedValue;
}

function callUs() {
    // Mengarahkan pengguna untuk menelepon nomor agen travel
    window.location.href = "tel:+6281234567890";
}

// Auto Play
setInterval(nextBanner, 3000);