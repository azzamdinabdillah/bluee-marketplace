Analisis masalah:
1.  **Isu Visibilitas (`display: flex`)**: Kelas `flex` dari Tailwind secara default memiliki spesifisitas CSS yang tinggi dan memaksa elemen menjadi `display: flex`, yang menimpa gaya bawaan browser untuk popover tertutup (`display: none`). Inilah sebabnya menu langsung muncul.
2.  **Isu Pemicu (`div` vs `button`)**: Atribut `popoverTarget` secara spesifikasi HTML dirancang untuk bekerja pada elemen `<button>` atau `<input type="button">`. Menggunakannya pada `div` mungkin tidak berfungsi konsisten di semua browser/versi React.
3.  **Isu Posisi (Top Layer)**: Menggunakan `popover="auto"` akan memindahkan elemen ke "Top Layer" browser, yang membuatnya keluar dari konteks posisi relatif induknya (`relative` parent). Akibatnya, kelas posisi seperti `top-full right-0` tidak akan menempatkan menu tepat di bawah avatar, melainkan di posisi default browser (biasanya tengah layar atau pojok kiri atas viewport).

**Rencana Perbaikan:**
Untuk mempertahankan desain dropdown yang tepat berada di bawah avatar (sesuai kelas CSS `top-full right-0` yang sudah ada), solusi terbaik dan paling stabil adalah **kembali menggunakan React State** alih-alih Native Popover API yang masih memiliki keterbatasan styling posisi (kecuali menggunakan CSS Anchor Positioning yang dukungan browsernya belum merata).

Langkah-langkah implementasi:
1.  **Ubah Trigger**: Mengganti `div` pembungkus avatar menjadi `<button>` agar lebih semantik dan aksesibel.
2.  **Aktifkan Kembali State**: Mengaktifkan kembali logika `isUserMenuOpen` dan `onClick` yang sebelumnya dikomentari.
3.  **Hapus Atribut Popover**: Menghapus `popover`, `popoverTarget`, dan `id="user-menu"` untuk menghindari konflik perilaku.
4.  **Kontrol Visibilitas**: Menggunakan kondisi `isUserMenuOpen` untuk menampilkan/menyembunyikan menu dropdown, atau menggunakan kelas kondisional.
5.  **Tambahkan "Click Outside"**: Menambahkan logika `useEffect` sederhana untuk menutup menu saat pengguna mengklik di luar area menu (meniru fitur "Light Dismiss" dari popover).

Ini akan memperbaiki masalah menu yang selalu muncul dan memastikan posisinya tetap rapi di bawah avatar.