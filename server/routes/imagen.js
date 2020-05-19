const express = require('express');
const fs      = require('fs');
const path    = require('path');
const { verificaTokenImg } = require('../middlewares/autentificacion');
const app     = express();



app.get('/imagen/:tipo/:img', verificaTokenImg, (req, res) => {
    
    let tipo = req.params.tipo;
    let nombreImg = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/${tipo}/${nombreImg}`);
    
    if(fs.existsSync(pathImagen))
    {
        res.sendFile(pathImagen);
    }
    else
    {
        let noImagePath = path.resolve(__dirname, `../assets/noPhoto.jpg`);
        res.sendFile(noImagePath);
    }

});


module.exports = app;
