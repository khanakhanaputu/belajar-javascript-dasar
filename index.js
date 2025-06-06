// array dan foreach
let orang = ['khana', 'Rahayu', 'Putra'];
// sudah menggunakan arraow function
orang.forEach((item) =>{
    console.log(item)
})

// orang.forEach((item) =>{
//     document.writeln(item)
// })
// Perulangan javascript
i = 0;
while (i < 5) {
    console.log(`pukimak ${i}`);
    i++;
}

for (let j = 0; j < 5; j++) {
    console.log(`jawascript ${j}`)
}


// object dalam javascript
let test = {
    nama: "khana",
    umur: 19,
    hobi: "adios",
    perkenalan: function(){
        console.log("Halo, nama saya " + this.nama + ", umur saya" + this.umur +", dan saya suka " + this.hobi)
    }
}

test.perkenalan();

// arraow function
const halo = (nama) => {
    return `halo ${nama}`
}

console.log(halo("khana"))

// array method
const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(angka.filter(num => num % 2 === 1));
hapus = 7
for (let i of angka) {
    if (i == hapus) {
        delete angka[i+1];
    }
}
console.log(angka)

// object desctructing

const laptop = {
    merk: "Asus",
    seri: "TUF FX505DT",
    ram: "16GB"
  };

let {merk, seri, ram} = laptop;

function intro({merk, ram}){
    console.log(`Laptop ${merk} dengan ram ${ram}`);
}

intro(laptop)

// ... buat nyambung array
const angkaAwal = [10, 20, 30];
const angkaGabungan = [...angkaAwal, 40, 50];

const tampil = function tampilAngka(...angka){
    return angka.reduce((a, b) => {
        return a + " " + b;
    }, 0);
    // reduce ni buat gabungin suatu array atau object atau apalah biar jadi satu nilai, 0 dibelakang ni nilai defaultnya 
    // a tu adalah nilai awal, dan b adalah nilai yang sekarang, mirip kek linkedlist
};

console.log(tampil(...angkaGabungan)); // ⬅️ ini penting!


const list = [1,2,3,4,5];

const LinkedList = function cetakAngka(...listnya){
    return listnya.reduce((a, b) => {
        return a + '=>' + b
    },"Head")
}

document.writeln(LinkedList(...list))


// fetch API

const panggilAPI = async function getAll() {
    let response = await fetch("http://readed-backend.test/api/getalldata")
    let data  = await response.json();
    return data;
}

console.log(panggilAPI())