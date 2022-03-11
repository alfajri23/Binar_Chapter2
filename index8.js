function hitungTotalPenjualan(dataPenjualan){
    let result ={
        totalKeuntungan : 0,
        totalModal : 0,
        persentaseKeuntungan : 0,
        produkBukuTerlaris : '',
        penulisTerlaris : ''
    }


    let max = 0;
    let max2 = 0;
    let datas = [];
    let data,penulis;


    for(let i=0;i<dataPenjualan.length;i++){
      for(let j=i+1;j<dataPenjualan.length;j++){
        if(dataPenjualan[i].penulis == dataPenjualan[j].penulis){
          data = {
            penulis : dataPenjualan[i].penulis,
            total : dataPenjualan[i].totalTerjual + dataPenjualan[j].totalTerjual
          }
          
        }else{
          data = {
            penulis : dataPenjualan[j].penulis,
            total : dataPenjualan[j].totalTerjual
          }
        }
        datas.push(data);
      }
    }

    datas.forEach( e => {
        if(max2 < e.total){
            max2 = e.total;
            penulis= e.penulis;
        }
    })

    //console.log(penulis)


    dataPenjualan.forEach( e => {
        result.totalKeuntungan += e.totalTerjual * (e.hargaJual-e.hargaBeli);
        result.totalModal += (e.totalTerjual+e.sisaStok) * (e.hargaBeli);
        if(max < e.totalTerjual){
            max = e.totalTerjual;
            result.produkBukuTerlaris = e.namaProduk;
           
        }
    })

    result.penulisTerlaris = penulis;

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
