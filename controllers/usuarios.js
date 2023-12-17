const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    //http://localhost:8080/api/usuarios?q=hola&nombre=Jorge&apikey=3213546  peticion get que se hace desde postman

    const { q, nombre='no Name', apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    });
}
const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}