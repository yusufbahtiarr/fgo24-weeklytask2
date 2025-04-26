// Task 4

function divideAndSort(number){
if(typeof number !== "number"){ //guarding
    console.log("input tipe data harus number(bilangan bulat)!"); return;
}
const dataNumber = number.toString() // konversi number ke string

// method chaining
const result = Number(dataNumber.split("0") // pemisahan 
    .map(item => item.split("").sort().join("")) //pengurutan
    .join("")); // penggabungan

console.log(result);
}

divideAndSort(5956560159466056)