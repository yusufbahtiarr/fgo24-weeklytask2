// promise
const fetchData = (status) => {
    return new Promise((resolve, reject) => {
        if(status){
            setTimeout(() => {
                resolve("Data berhasil disimpan")
            }, 3000)
        }else{
            reject("Gagal mengambil data")
        }
    })
}

// then-catch
fetchData(true)
.then((res) => {
  console.log("Program berhasil diproses:", res);
})
.catch((err) => {
  console.log("Program gagal di proses:", err);  
})

//async-await (try-catch)
const asyncAwait = async () => {
  try {
    const res = await fetchData(true);
    console.log("Program berhasil diproses:", res);
  } catch (err) {
    console.log("Prgram gagal diproses:");         
  }
}
asyncAwait();

/*
1. Promise adalah tipe data non-ptimitif di javascript, yang merepresentasikan penyelesaian (baik berhasil/gagal) dari sebuah operasi asynchronous. promise juga adalah fundamental untuk kerja asynchronous di javascript.
  Promise memiliki 3 keadaan(state) 
  - Pending : Operasi belum selesai
  - Fulfilled : Operasi sukses (resolve)
  - Rejected : Operasi gagal (reject)
 
2. then-catch adalah method untuk menangani Promise.
  - then : method untuk menangani Promise berhasil (resolve) 
  - catch : method untuk menangani Promise gagal (reject)
3. async-await adalah method untuk menangani Promise untuk alur yang lebih kompleks. sintak ini membuat kode asynchronous terlihat seperti kode syncronous.
  - await : untuk menunggu penyelesaian Promise 
4. try-catch adalah struktur kontrol dlam java script yang digunakan untuk menangani error(pengecualian) secara elegan tanpa menghentikan proses secara keseluruhan
  - try : blok kode yang mungkin menghasilkan error
  - catch : menangkap error yang terjadi di try(jika ada)
*/
