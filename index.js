const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

///////////////////////////////////////////////////////////////////////////////////////////

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
 
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
 
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

////////////////////////////////////////////////////////////////////////////////////////// 1. bangun ruang

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    // :name dan :age 🡪 diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
 
    // menampung data yang dikirimkan
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age
 
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
 
})

// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
 
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai panjang dari body
 
    let luas = 6 * (sisi * 2)
    let keliling = 12 * sisi
    let volume = sisi * 3

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        luas: luas,
        keliling: keliling,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengambil nilai panjang dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body

    let luas = 2*lebar*panjang + 2*lebar*tinggi + 2*panjang*tinggi
    let keliling = 4 * (panjang + lebar + tinggi)
    let volume = panjang * lebar * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        keliling: keliling,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari = Number(req.body.jari) // mengambil nilai panjang dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body

    let luas = 2*22/7*jari*(jari+tinggi)
    let keliling = 2*22/7*jari
    let volume = 22/7*jari*jari*tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari: jari,
        tinggi: tinggi,
        luas: luas,
        keliling: keliling,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let diameter = Number(req.body.diameter)

    let luas = 4*22/7*((diameter/2)*2)
    let keliling = 22/7*diameter
    let volume = 4/3*22/7*((diameter/2)*3)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        diameter: diameter,
        luas: luas,
        keliling: keliling,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//////////////////////////////////////////////////////////////////////////////////////// 2.  suhu

// end-point "/fareheit" dengan method POST
app.post("/farenheit", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let farenheit = Number(req.body.farenheit) // mengamil nilai lebar dari body
    
    let celcius = 5/9 * (farenheit - 32)
    let reamur = 4/9 * (farenheit - 32)
    let kelvin = 5/9 * (farenheit - 32) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        farenheit: farenheit,
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/celcius" dengan method POST
app.post("/celcius", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let celcius = Number(req.body.celcius) // mengamil nilai lebar dari body
    
    let farenheit = 9/5 * celcius + 32
    let reamur = 4/5 * celcius
    let kelvin = celcius + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius: celcius,
        farenheit: farenheit,
        reamur: reamur,
        kelvin: kelvin
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/reamur" dengan method POST
app.post("/reamur", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let reamur = Number(req.body.reamur) // mengamil nilai lebar dari body
    
    let farenheit = 9/4 * reamur + 32
    let celcius = 5/4 * reamur
    let kelvin =  5/4 * reamur + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        reamur: reamur,
        celcius: celcius,
        farenheit: farenheit,
        kelvin: kelvin
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kelvin" dengan method POST
app.post("/kelvin", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let kelvin = Number(req.body.kelvin) // mengamil nilai lebar dari body
    
    let farenheit = 9/5 * (kelvin-273) + 32
    let celcius = kelvin - 273
    let reamur =  4/5 * (kelvin-273)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        kelvin: kelvin,
        reamur: reamur,
        celcius: celcius,
        farenheit: farenheit
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

/////////////////////////////////////////////////////////////////////////////////////// 3. desimal

// end-point "/desimal" dengan method POST
app.post("/desimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let desimal = Number(req.body.desimal) // mengamil nilai lebar dari body


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        desimal: desimal,
        oktal: desimal.toString(8),
        biner: desimal.toString(2),
        hexa_desimal: desimal.toString(16)
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

////////////////////////////////////////////////////////////////////////////////////// 4. BMI

// end-point "/BMI" dengan method POST
app.post("/BMI", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body
    let berat = Number(req.body.berat)

    let BMI = berat / (tinggi * tinggi)

    if (BMI < 18.5) {
        var status = "kekurangan berat badan"
    } else if (BMI > 18.5 && BMI < 24.9) {
        var status = "ideal"
    } else if (BMI > 25.0 && BMI < 29.9) {
        var status = "kelebihan berat badan"
    } else if (BMI > 30) {
        var status = "obesitas"
    }

    
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        berat: berat,
        BMI: BMI,
        status: status

    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8050
app.listen(8050, () => {
    console.log("Server run on port 8050");
})
