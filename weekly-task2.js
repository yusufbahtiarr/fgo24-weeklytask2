const getDataFromServer = (status, callback)=>{
    if(status){
        setTimeout(()=>{
            const products = [
                'Product 1',
                'Product 2',
                'Product 3'
            ]
            callback(products,null)
        }, 3000)
    }else{
        const err = new Error('Failed to fetch data')
        callback(null, err)
    }
}

function processData (data, err) {
    try {
        if (data) {
            data.map((a) => console.log(a));
        }else{
            console.log(err.message);
        }
    }catch(err){
        console.log(err);
    }
}
getDataFromServer(0, processData);
getDataFromServer(1, processData);

// diberikan sebuah fungsi getDataServer.
// Fungsi getDataServer mensimulasikan pengambilan data dari server dengan setTimeout dan
// menerima callback yang akan dipanggil setelah data berhasil diambil.
// Lanjutkan kode tersebut, biarkan callback bernama processData untuk handling error dengan menggunakan try-catch 
// dan meng-outputkan data dari parameter callback hasil pemanggilan getDataFromServer