const dataMahasiswa = []
let counter;
const getDataMahasiswa = () => {
    const Mahasiswa = {}

    do {
        Mahasiswa.username = prompt("Masukkan nama mahasiswa : ")
        Mahasiswa.nim = prompt("Masukkan nim mahasiswa : ")
        Mahasiswa.email = prompt("Masukkan email mahasiswa : ")
        Mahasiswa.NoHP = prompt("Masukkan nomor HP mahasiswa : ")
    } while(Mahasiswa.username === null || Mahasiswa.username === "" || Mahasiswa.nim === null || Mahasiswa.nim === "" || Mahasiswa.email === null || Mahasiswa.email === "" || Mahasiswa.NoHP === null || Mahasiswa.NoHP === "")

    return Mahasiswa;
}

do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Ingin masukkan data lagi ?")
} while(counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem("Data Mahasis", strDataMahasiswa)

console.log(dataMahasiswa)