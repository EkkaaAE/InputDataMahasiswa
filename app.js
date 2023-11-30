const {getDataMahasiswa} = require("./index3")
const prompt = require('prompt-sync') ()

let counter;

do {
    getDataMahasiswa(["username","nim", "email", "noHp"])
    counter = prompt("Ingin mengulang ? (y/n)")
} while (counter === 'y' || counter === 'Y')