function submitAnswers() {
    const form = document.getElementById('worksheetForm');
    const formData = new FormData(form);
    
    // Pengumpulan data dapat dilakukan di sini, misalnya dikirim ke server atau disimpan lokal.
    // Dalam contoh ini, kita hanya menampilkan data di konsol.

    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    alert("Jawaban berhasil dikumpulkan!");
}
