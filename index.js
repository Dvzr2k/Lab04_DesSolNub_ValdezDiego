const express = require('express')

const app = express()
var arrayOfProducts = [{
    nombre:"Smartwatch",
    precio:"250",
    stock:1000,
    marca:"Xiaomi"},
    {
        nombre:"Applewatch",
        precio:"1200",
        stock:300,
        marca:"Apple"
    },
    {
        nombre:"Smartwatch",
        precio:"600",
        stock:560,
        marca:"Samsung"
    }];

var arrayOfClients = [{
    
        nombre:"Diego",
        apellido:"Gomez",
        edad:20,
        email:"dgomez@example.com",
        direccion:{
            ciudad:"Lima -Peru",
            pais:"Perú",
            calle: "Av España 223",
        }},

        {nombre:"Matias",
            apellido:"Ferreti",
            edad:20,
            email:"mferreti@example.com",
            direccion:{
            ciudad:"Lima -Peru",
            pais:"Perú",
            calle: "Av Las Chulpas 531",
            }},
            {
            nombre:"Lorenzo",
            apellido:"Lamas",
            edad:20,
            email:"llamas@example.com",
            direccion:{
                ciudad:"Lima -Peru",
                pais:"Perú",
                calle: "Av Brasil 421"
            }}];

app.get('/',(req,res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/productos',(req,res) => {
    res.json(arrayOfProducts)
    
})
        

app.get('/clientes',(req,res) => {
    res.json(arrayOfClients)  
    })

app.use((req,res) => {
    res.status(404).send("No se encontró la página"
    +"que estás buscando.")
})
app.listen(5000)
console.log(`Server on port ${5000}`)