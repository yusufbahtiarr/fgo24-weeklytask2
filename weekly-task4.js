// Task 4

function divideAndSort(number){
if(typeof number !== "number"){ //guarding
    console.log("input tipe data harus number(bilangan bulat)!"); return;
}
const dataNumber = number.toString() // konversi number ke string

// method chaining
const result = Number(dataNumber.split("0") // pemisahan berdasarkan "0" 
    .map(item =>        // untuk tiap bagian hasil split
        item.split("")  // pisahkan tiap karakter
        .sort()         // urutkan
        .join(""))      // gabungkan jadi string lagi
    .join("")); // gabungkan hasil map jadi satu string

console.log(result);
}

divideAndSort(5956560159466056)