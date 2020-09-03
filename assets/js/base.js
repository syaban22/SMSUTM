function hitung(time) {
    var barang1 = document.getElementById('barang1').value;
    var barang2 = document.getElementById('barang2').value;
    var barang3 = document.getElementById('barang3').value;
    var barang4 = document.getElementById('barang4').value;

    var ftagihan = document.getElementById('tagihanfield');
    var harga = document.getElementById('harga');
    var ket = document.getElementById('keterangan');
    var ket1 = document.getElementById('satu');
    var ket2 = document.getElementById('dua');
    var ket3 = document.getElementById('tiga');
    var ket4 = document.getElementById('empat');
    var hasil = (Number(barang1) * 235) + (Number(barang2) * 400) + (Number(barang3) * 600) + (Number(barang4) * 1000);

    ftagihan.innerHTML = ": Rp. " + hasil.toString();
    ket1.innerHTML = ": " + barang1.toString() + " x Rp. 235";
    ket2.innerHTML = ": " + barang2.toString() + " x Rp. 400";
    ket3.innerHTML = ": " + barang3.toString() + " x Rp. 600";
    ket4.innerHTML = ": " + barang4.toString() + " x Rp. 1000";
    
    harga.value = hasil.toString();
    if (Number(barang1)!=0){ket.value +="Hitam Putih : " + barang1.toString() +"hlm ";}
    if (Number(barang2)!=0){ket.value +="1/4 Warna : " + barang2.toString() +"hlm ";}
    if (Number(barang3)!=0){ket.value +="1/2 Warna : " + barang3.toString() +"hlm ";}
    if (Number(barang4)!=0){ket.value +="Full Warna : " + barang4.toString() +"hlm ";}
}