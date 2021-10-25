const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: 'Get api - controlador',
        query
    });
}



const usuariosPut = (req, res) => {
    const { id } = req.params;

    res.json({
        msg: 'put api controlador',
        id
    });
}


const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;
    res.json({
        msg: 'post api controlador',
        nombre,
        edad
    });
}


const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete api controlador'
    });
}


const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch api controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
}