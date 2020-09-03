const flashdata = $('.flash-data').data('flashdata');
var sukses = ['Login berhasil', 'Menambah User baru berhasil', 'Edit Data User berhasil', 'Menghapus User berhasil',
    'Barang berhasil ditambahkan', 'Barang berhasil dihapus', 'Edit Data Barang berhasil', 'Hapus Transaksi berhasil',
    'Transaksi baru berhasil ditambahkan', 'Edit Data Transaksi berhasil'
];
for (i = 0; i < sukses.length; i++) {
    if (flashdata == sukses[i]) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: flashdata,
            showConfirmButton: false,
            timer: 2000
        })
        break;
    }
}
//Pendaftaran Berhasil
if (flashdata == 'Pendaftaran Sukses !') {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: flashdata,
        text: 'Silahkan lakukan login',
        showConfirmButton: false,
        timer: 2000
    })
}
//pendaftaran gagal
if (flashdata == 'Pendaftaran Gagal !') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: flashdata,
        text: 'Akun tidak didaftarkan',
        showConfirmButton: true,
    })
}


//LOGIN gagal (user belum terdaftar)
if (flashdata == 'User belum terdaftar') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login Tidak berhasil',
        text: 'User belum terdaftar',
        showConfirmButton: true,
    })
}

//LOGIN gagal (Password Salah)
if (flashdata == 'Password Salah !') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login Tidak berhasil',
        text: 'Password Salah !',
        showConfirmButton: true,
    })
}

//Tambah user gagal (user telah terdaftar)
if (flashdata == 'Username ini sudah terdaftar') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Menambahkan User tidak berhasil',
        text: flashdata,
        showConfirmButton: true,
    })
}

//Edit data user gagal (tidak dilakukan perubahan apa")
if (flashdata == 'Tidak melakukan Edit Data User') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Edit Data User tidak dilakukan',
        text: flashdata,
        showConfirmButton: true,
    })
}

//Notifikasi ada field kosong
if (flashdata == 'Harap mengisi seluruh inputan') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Edit Data User tidak berhasil',
        text: flashdata,
        showConfirmButton: true,
    })
}

//Tombol konfirmasi delete user
$('.DelUser').on('click', function (e) {
    e.preventDefault();
    const nama = $(this).data('nama');
    const href = $(this).attr('href');
    Swal.fire({
        title: 'Hapus User',
        html: "Apakah anda yakin untuk menghapus User  " + '<b>' + nama + '</b>' + " ?",
        icon: 'warning',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelmButtonText: 'Tidak'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })
});


//Tombol konfirmasi delete barang
$('.DelBarang').on('click', function (e) {
    e.preventDefault();
    const nama = $(this).data('nama');
    const href = $(this).attr('href');
    Swal.fire({
        title: 'Hapus Barang',
        html: "Apakah anda yakin untuk menghapus  " + '<b>' + nama + '</b>' + " ?",
        icon: 'warning',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelmButtonText: 'Tidak'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })
});


//Tambah barang gagal (barang telah terdaftar)
if (flashdata == 'Barang sudah pernah ditambahkan') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tambah Barang tidak berhasil',
        text: flashdata,
        showConfirmButton: true,
    })
}

//Notifikasi ada field kosong (barang)
if (flashdata == 'Harap mengisi seluruh inputan barang') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tambah Barang tidak berhasil',
        text: flashdata,
        showConfirmButton: true,
    })
}


//Tombol konfirmasi delete Transaksi
$('.DelTrans').on('click', function (e) {
    e.preventDefault();
    const nama = $(this).data('nama');
    const href = $(this).attr('href');
    Swal.fire({
        title: 'Hapus Transaksi',
        html: "Apakah anda yakin untuk menghapus transaksi " + '<b>' + nama + '</b>' + " ?",
        icon: 'warning',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelmButtonText: 'Tidak'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })
});

//Notifikasi ada field kosong (transaksi)
if (flashdata == 'Harap mengisi seluruh inputan transaksi') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tambah Transaksi tidak berhasil',
        text: flashdata,
        showConfirmButton: true,
    })
}

//Notifikasi ada field kosong (edit transaksi)
if (flashdata == 'Harap mengisi seluruh inputan edit transaksi') {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Edit Transaksi tidak berhasil',
        text: flashdata,
        showConfirmButton: true,
    })
}


// ================================sudah diganti array======================================
// //LOGIN berhasil
// if (flashdata == 'Login berhasil') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }
// //Penambahan User Berhasil
// if (flashdata == 'Menambah User baru berhasil') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }

// //Edit data user berhasil
// if (flashdata == 'Edit Data User berhasil') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: true,
//     })
// }

// //Delete User berhasil
// if (flashdata == 'Menghapus User berhasil') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: true,
//     })
// }

// //Tambah barang berhasil
// if (flashdata == 'Barang berhasil ditambahkan') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }
// //Delete Barang berhasil
// if (flashdata == 'Barang berhasil dihapus') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }
// //Edit Data Barang berhasil
// if (flashdata == 'Edit Data Barang berhasil') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }

// //Delete Transaksi berhasil
// if (flashdata == 'Hapus Transaksi berhasil') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }

// //Tambah Transaksi berhasil
// if (flashdata == 'Transaksi baru berhasil ditambahkan') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }

// //Edit Data Transaksi berhasil
// if (flashdata == 'Edit Data Transaksi berhasil') {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: flashdata,
//         showConfirmButton: false,
//         timer: 2000
//     })
// }