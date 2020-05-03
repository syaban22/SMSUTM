const flashdata = $('.flash-data').data('flashdata');
if (flashdata == 'Akses telah diganti') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Level akses berhasil diganti',
		showConfirmButton: false,
		timer: 1500
	})
}

if (flashdata == 'berhasil dikirim') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Skripsi Anda telah didaftarkan',
		showConfirmButton: true,
	})
}

if (flashdata == 'Anda telah mendaftarkan 1 Skripsi') {
	Swal.fire({
		position: 'center',
		icon: 'warning',
		title: 'Anda telah mendaftarkan 1 Skripsi',
		text: 'Hubungi Admin untuk melakukan perubahan data Skripsi',
		showConfirmButton: true,
	})
}

//Mahasiswa Tambah Skripsi (Mahasiswa)
if (flashdata == 'Skripsi Anda berhasil didaftarkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Format Foto Salah') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Upload Foto Gagal',
		text: 'Harap sesuaikan dengan format yang telah ditentukan',
		showConfirmButton: true,
	})
}

if (flashdata == 'Update Foto Berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

// sweet alert untuk logout
$('.out').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Keluar ?',
		text: "Pilih 'Keluar' untuk melanjutkan",
		icon: 'question',
		showCancelButton: true,
		focusConfirm: false,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Keluar',
		cancelmButtonText: 'Cancel'
	}).then((result) => {
		if (result.value) {
			document.location.href = href;
		}
	})
});

if (flashdata == 'Logout berhasil') {
	Swal.fire({
		title: '<strong>Anda telah logout</strong>',
		imageUrl: './assets/img/th.png',
		imageWidth: 300,
		imageHeight: 180,
		imageAlt: 'Custom image',
		showCloseButton: true,
		showCancelButton: false,
		focusConfirm: false,
		showConfirmButton: false,
		timer: 4000
	})
}

if (flashdata == 'Pendaftaran Sukses!') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Akun berhasil dibuat',
		text: 'Silahkan lakukan Login',
		showConfirmButton: false,
		timer: 2500
	})
}

if (flashdata == 'Password salah!') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Password Salah',
		text: 'Silahkan coba lagi',
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'User belum terdaftar!') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: flashdata,
		text: 'Silahkan buat akun terlebih dahulu',
		showConfirmButton: false,
		timer: 2500
	})
}

//Alert untuk penambahan User (ADMINISTRATOR INDEX)
if (flashdata == '1 User baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//gagal menambahkan user (ADMINISTRATOR)
if (flashdata == 'Username ini sudah terpakai') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: flashdata,
		text: 'Harap periksa kembali dan coba lagi',
		showConfirmButton: false,
		timer: 3000
	})
}

// alert untuk tambah dosen (dari ADMIN PRODI + ADMINISTRATOR)
if (flashdata == '1 User Dosen berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//gagal menambahkan dosen (ADMIN + ADMINISTRATOR)
if (flashdata == 'Menambahkan Dosen gagal') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: flashdata,
		text: 'NIP ini sudah pernah didaftarkan',
		showConfirmButton: false,
		timer: 3000
	})
}

//Tambah Dosen penguji dalam Daftar Skripsi (ADMIN Prodi)
if (flashdata == 'Dosen penguji berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Modal Pop-up Delete Confirmation (ADMIN Prodi + ADMINISTRATOR)
$('.deleteDosen').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Dosen',
		html: "Apakah anda yakin untuk menghapus user Dosen  " + '<b>' + nama + '</b>' + " ?",
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

//Modal Pop-up Delete Confirmation (delete bimbingan controler dosen)
$('.deletebimbingan').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Catatan Bimbingan',
		html: "Apakah anda yakin untuk menghapus catatan " + '<b>' + nama + '</b>' + " ?",
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

//Alert TambahFakultas (ADMINISTRATOR)
if (flashdata == '1 Fakultas baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Alert Hapusfakultas (ADMINISTRATOR)
if (flashdata == '1 Fakultas berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

// CRUD Level
$('.deleteL').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Level',
		html: "Apakah anda yakin untuk menghapus Level " + '<b>' + nama + '</b>' + " ?",
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

if (flashdata == 'Level berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Edit data Level') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata + ' berhasil',
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Level baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Alert Tambah Prodi Baru (ADMINISTRATOR)
if (flashdata == '1 Program Studi baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Tambah Prodi gagal (ADMINISTRATOR)
if (flashdata == 'Menambahkan Program Studi tidak berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: flashdata,
		text: 'Program Studi telah terdaftar',
		showConfirmButton: false,
		timer: 3000
	})
}

//Konfirmasi Delete Prodi (ADMINISTRATOR)
$('.deletePro').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Prodi',
		html: "Apakah anda yakin untuk menghapus " + '<b>' + nama + '</b>' + " ?",
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

//Delete Prodi (ADMINISTRATOR)
if (flashdata == '1 Program Studi berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//EDIT Prodi (ADMINISTRATOR)
if (flashdata == 'Edit data Program Studi berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Konfirmasi Delete Fakultas (ADMINISTRATOR)
$('.deleteFak').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Fakultas',
		html: "Apakah anda yakin untuk menghapus " + '<b>' + nama + '</b>' + " ?",
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

//Delete catatan bimbingan (Dosen)
if (flashdata == '1 catatan bimbingan berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Delete User Dosen (ADMIN Prodi)
if (flashdata == '1 User Dosen berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Edit User Dosen (ADMIN Prodi + ADMINISTRATOR)
if (flashdata == 'Edit data user Dosen berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Tambah User Mahasiswa (ADMIN Prodi + ADMINISTRATOR)
if (flashdata == '1 User Mahasiswa berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//gagal menambahkan Mahasiswa (ADMIN + ADMINISTRATOR)
if (flashdata == 'Menambahkan Mahasiswa gagal') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: flashdata,
		text: 'NIM ini sudah pernah didaftarkan',
		showConfirmButton: false,
		timer: 3000
	})
}

//gagal menambahkan Mahasiswa (prodi tidak sesuai) (ADMIN + ADMINISTRATOR)
if (flashdata == 'Menambahkan Mahasiswa gagal prodi') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Menambahkan Mahasiswa gagal',
		text: 'Prodi tidak sesuai, periksa kembali',
		showConfirmButton: false,
		timer: 3000
	})
}

$('.deleteMhs').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Mahasiswa',
		html: "Apakah anda yakin untuk menghapus user Mahasiswa " + '<b>' + nama + '</b>' + " ?",
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

//Delete User Mahasiswa (ADMIN Prodi)
if (flashdata == '1 user Mahasiswa berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Edit Data Mahasiswa (ADMIN Prodi + ADMINISTRATOR)
if (flashdata == 'Edit data Mahasiswa berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

// CRUD Menu Managements
$('.deleteM').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Menu',
		html: "Apakah anda yakin untuk menghapus Menu " + '<b>' + nama + '</b>' + " ?",
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

if (flashdata == 'Menu berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Menu gagal dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: flashdata,
		text: 'Non-Aktifkan Menu dari setiap User!',
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Menu baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Edit Data Menu berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Sub-Menu baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

$('.deleteSM').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Sub-Menu',
		html: "Apakah anda yakin untuk menghapus Sub-Menu " + '<b>' + nama + '</b>' + " ?",
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

if (flashdata == 'Sub-Menu berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

if (flashdata == 'Edit Data Sub-Menu berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

// CRUD Perusahaan
if (flashdata == '1 Pelamar diterima') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2500
	})
}

$('.TerimaP').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Terima Pelamar',
		html: "Apakah anda yakin untuk menerima Sdr/i " + '<b>' + nama + '</b>' + " ?",
		icon: 'question',
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

$('.TolakP').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Tolak Pelamar',
		html: "Apakah anda yakin untuk menolak Sdr/i " + '<b>' + nama + '</b>' + " ?",
		icon: 'question',
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

if (flashdata == '1 Pelamar ditolak') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2500
	})
}

$('.cancel').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Batalkan Aksi',
		html: "Apakah anda yakin untuk membatalkan aksi ?",
		icon: 'question',
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

if (flashdata == 'Aksi berhasil dibatalkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2500
	})
}

if (flashdata == 'Gagal pass') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Ubah Password Gagal',
		text: 'Harap periksa dan ulangi kembali',
		showConfirmButton: true,
	})
}

if (flashdata == 'kosong') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Ubah Password Gagal',
		text: 'Field tidak boleh kosong!',
		showConfirmButton: true,
	})
}

if (flashdata == 'Ubah Password Berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2500
	})
}

if (flashdata == 'Update Profil Perusahaan Berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2500
	})
}

if (flashdata == 'Detail Profil Perusahaan Berhasil Ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2500
	})
}

//Konfirmasi delete User (ADMIN Prodi + ADMINISTRATOR)
$('.deleteU').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus User',
		html: "Apakah anda yakin untuk menghapus user " + '<b>' + nama + '</b>' + " ?",
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

//Delete User (ADMIN Prodi + ADMINISTRATOR)
if (flashdata == '1 User berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Edit Data User (ADMIN Prodi)
if (flashdata == 'Edit Data User berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Delete User gagal (ADMIN Prodi)
if (flashdata == 'Hapus User gagal') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Hapus User tidak berhasil',
		text: 'Harap menghapus Mahasiswa/Dosen dan coba lagi',
		showConfirmButton: true,
	})
}

//Delete Fakultas gagal (ADMINISTRATOR)
if (flashdata == 'Gagal menghapus Fakultas') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Hapus Fakultas tidak berhasil',
		text: 'Harap menghapus seluruh Prodi yang bersangkutan dengan Fakultas dan coba lagi',
		showConfirmButton: true,
	})
}

//Tambah Fakultas gagal (ADMINISTRATOR)
if (flashdata == 'Menambahkan Fakultas tidak berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: flashdata,
		text: 'Fakultas telah terdaftar',
		showConfirmButton: false,
		timer: 3000
	})
}

//Edit Data Fakultas (ADMINISTRATOR)
if (flashdata == 'Edit Data Fakultas berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//CRUD JENKEL (ADMINISTRATOR)
//Konfirmasi delete jenkel
$('.deleteJenkel').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Jenis Kelamin',
		html: "Apakah anda yakin untuk menghapus Jenis Kelamin  " + '<b>' + nama + '</b>' + " ?",
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

//Delete jenkel
if (flashdata == '1 Jenis Kelamin berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Edit Jenkel
if (flashdata == 'Edit data Jenis Kelamin berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Tambah Jenkel
if (flashdata == '1 Jenis Kelamin baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Tambah Jenkel gagal (ADMINISTRATOR)
if (flashdata == 'Gagal menambahkah Jenis Kelamin') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Menambahkan Jenis Kelamin tidak berhasil',
		text: 'Harap periksa kembali dan coba lagi',
		showConfirmButton: true,
	})
}

//CRUD Status (ADMINISTRATOR)
//Konfirmasi delete Status
$('.deleteStatus').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Status',
		html: "Apakah anda yakin untuk menghapus Status  " + '<b>' + nama + '</b>' + " ?",
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

//Delete Status
if (flashdata == '1 Status berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Edit Status
if (flashdata == 'Edit data Status berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Konfirmasi perubahan status Sempro (lolos)
$('.lolos').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Perubahan Status Hasil Sempro',
		html: "Apakah anda yakin untuk merubah Status Sempro menjadi  " + '<b>' + 'Lulus' + '</b>' + " ?",
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

//Konfirmasi perubahan status Sempro (ulangi sempro)
$('.ulangsempro').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Perubahan Status Hasil Sempro',
		html: "Apakah anda yakin untuk merubah Status Sempro menjadi  " + '<b>' + 'Ulangi Sempro' + '</b>' + " ?",
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

//Konfirmasi perubahan status Sempro (ulangi sempro)
$('.gagalsempro').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Perubahan Status Hasil Sempro',
		html: "Apakah anda yakin untuk merubah Status Sempro menjadi  " + '<b>' + 'Sempro Gagal' + '</b>' + " ?",
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

//Perubahan Status Sempro (DOSEN)
if (flashdata == 'perubahan status lolos') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Status telah diubah menjadi "Lulus Sempro"',
		showConfirmButton: false,
		timer: 3000
	})
}

//Perubahan Status Sempro (DOSEN)
if (flashdata == 'perubahan status ulang') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Status telah diubah menjadi "Sempro Ulang"',
		showConfirmButton: false,
		timer: 3000
	})
}

//Perubahan Status Sempro (DOSEN)
if (flashdata == 'perubahan status gagal') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Status telah diubah menjadi "Sempro Gagal"',
		showConfirmButton: false,
		timer: 3000
	})
}

//Tambah Status
if (flashdata == '1 Status baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Tambah Status gagal (ADMINISTRATOR)
if (flashdata == 'Gagal menambahkah Status') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Menambahkan Status tidak berhasil',
		text: 'Harap periksa kembali dan coba lagi',
		showConfirmButton: true,
	})
}

//CRUD Jadwal Sempro
//Edit Jadwal
if (flashdata == 'Edit Jadwal Sempro berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Konfirmasi delete Jadwal Sempro
$('.deleteJS').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Jadwal Sempro',
		html: "Apakah anda yakin untuk menghapus Jadwal Sempro  " + '<b>' + nama + '</b>' + " ?",
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

//Delete Status
if (flashdata == '1 Jadwal Sempro berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Hapus Jadwal Sempro gagal
if (flashdata == 'Hapus Jadwal Sempro gagal') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Menghapus Jadwal Sempro tidak berhasil',
		text: 'Harap periksa kembali dan coba lagi',
		showConfirmButton: true,
	})
}

//Tambah Jadwl Sempro
if (flashdata == 'Jadwal Sempro baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Tambah Jadwal Sempro gagal
if (flashdata == 'Gagal menambahkah Jadwal Sempro') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Menambahkan Jadwal Sempro tidak berhasil',
		text: 'Judul telah didaftarkan untuk Sempro',
		showConfirmButton: true,
	})
}

//CRUD Jadwal Sidang
//Edit Jadwal
if (flashdata == 'Edit Jadwal Sidang berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Konfirmasi delete Jadwal Sidang
$('.deleteJS').on('click', function (e) {
	e.preventDefault();
	const nama = $(this).data('nama');
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Hapus Jadwal Sidang',
		html: "Apakah anda yakin untuk menghapus Jadwal Sidang  " + '<b>' + nama + '</b>' + " ?",
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

//Delete Status
if (flashdata == '1 Jadwal Sidang berhasil dihapus') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Hapus Jadwal Sidang gagal
if (flashdata == 'Hapus Jadwal Sidang gagal') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Menghapus Jadwal Sidang tidak berhasil',
		text: 'Harap periksa kembali dan coba lagi',
		showConfirmButton: true,
	})
}

//Tambah Jadwl Sidang
if (flashdata == 'Jadwal Sidang baru berhasil ditambahkan') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//Tambah Jadwal Sidang gagal
if (flashdata == 'Gagal menambahkah Jadwal Sidang') {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Menambahkan Jadwal Sidang tidak berhasil',
		text: 'Judul telah didaftarkan untuk Sidang',
		showConfirmButton: true,
	})
}

//Bimibingan Mahasiswa
//Tombol konfirmasi daftar sempro
$('.sempro').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	Swal.fire({
		title: 'Daftar Seminar Proposal',
		html: "Apakah anda yakin mendaftarkan Skripsi ini untuk " + '<b>' + 'Seminar Proposal' + '</b>' + " ?",
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

//Tambah Jadwl Sidang
if (flashdata == 'Mendaftarkan Skripsi untuk Sempro berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//berhasil mengajukan bimbingan (Mahasiswa)
if (flashdata == 'Mengajukan Bimbingan Skripsi Berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}

//berhasil mengajukan mengubah catatan (Dosen)
if (flashdata == 'Edit Catatan Berhasil') {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: flashdata,
		showConfirmButton: false,
		timer: 2000
	})
}
