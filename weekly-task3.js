// Buatlah program menggunakan fetch api dari restapi
// http://jsonplaceholder.typicode.com/users
// dengan ketentuan
// - Output berupa array of object dimana memiliki data nama dan domisili dari masing-masing user
// - Output diurutkan berdasarkan domisili seccara ascending

const url = "http://jsonplaceholder.typicode.com/users";
const fetchData = async () => {
  try {
    const response = await fetch(url);
    // cek kalau fetch gagal
    if (!response.ok){
      throw new Error("Error Url JSON");
    }
    const data = await response.json();

    // cek data apakah kosong
    if (!data){
      throw new Error("Not found JSON");
    }

    showData(data)
    
  } catch (err){
    console.log("Error Message: ", err.message);
  }
};
fetchData();

function showData(name){
  const dataName = name.map((a) => ({
    name: a.name,
    city: a.address.city
  }))
  const result = dataName.sort((a, b) => a.city.localeCompare(b.city));
  result.map((a, index) => {
    console.log(`${index + 1}. ${a.name} (${a.city})`);
  })
}