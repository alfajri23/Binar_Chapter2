function hitungTotalPenjualan(dataPenjualan){
    let result ={
        totalKeuntungan : 0,
        totalModal : 0,
        persentaseKeuntungan : 0,
        produkBukuTerlaris : '',
        penulisTerlaris : ''
    }

    let max = 0;

    dataPenjualan.forEach( e => {
        result.totalKeuntungan += e.totalTerjual * (e.hargaJual-e.hargaBeli);
        result.totalModal += (e.totalTerjual+e.sisaStok) * (e.hargaBeli);
        if(max < e.totalTerjual){
            max = e.totalTerjual;
            result.produkBukuTerlaris = e.namaProduk;
            result.penulisTerlaris = e.penulis;
        }
    })

    result.persentaseKeuntungan = Math.round(result.totalKeuntungan/result.totalModal * 100 ) + '%';
    result.totalKeuntungan = 'Rp. '+ result.totalKeuntungan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    result.totalModal = 'Rp.'+ result.totalModal.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return result;
}

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

console.log(hitungTotalPenjualan(dataPenjualanNovel));
