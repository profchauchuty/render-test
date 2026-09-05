import UsuarioService from './../services/usuario.service.js'

class UsuarioController {

    async getAll(req, res){
        const usuarios = await UsuarioService.getAll()

        res.json(usuarios)
    }

    async getById(req, res){
        const { id } = req.params
        const usuario = await UsuarioService.getById(id)
        res.json(usuario)
    }

    async create(req, res){
        const usuarioData = req.body
        const usuarioCriado = await UsuarioService.create(usuarioData)

        res.status(201).json(usuarioCriado)
    }
}

const usuarioController = new UsuarioController()

export default usuarioController