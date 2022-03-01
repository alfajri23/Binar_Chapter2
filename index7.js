function getTotalPenjualan(dataPenjualanPakAldi){
    let result = 0;
    if(Array.isArray(dataPenjualanPakAldi)){
        dataPenjualanPakAldi.forEach( e => {
            result += e.totalTerjual;
        })
    }else{
        return 'Error : input harus berupa array'
    }

    return result;
}

const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ];


console.log(getTotalPenjualan(dataPenjualanPakAldi));
