import sql from './../database/conn.js'

class UsuarioService {

    async getAll() {
        const usuarios = await sql`SELECT ID, USERNAME, CREATED_AT FROM "USUARIO" WHERE DELETED_AT IS NULL`

        return usuarios
    }

    async getById(id) {
        const [usuario] = await sql`SELECT ID, USERNAME, CREATED_AT FROM "USUARIO" WHERE ID = ${id} AND DELETED_AT IS NULL`

        return usuario
    }

    async getByUsername(username) {
        const [usuario] = await sql`SELECT ID, USERNAME FROM "USUARIO" WHERE USERNAME = ${username} AND DELETED_AT IS NULL`

        return usuario
    }

    async create(usuario) {
        const usuarioExistente = await this.getByUsername(usuario.username)

        if(usuarioExistente){
            throw new Error('Usuário já existe!')
        }

        const usuarioCriado = await sql`INSERT INTO "USUARIO" (USERNAME, PASSWORD)VALUES (${usuario.username}, ${usuario.password}) RETURNING ID, USERNAME, CREATED_AT`

        return usuarioCriado
    }
}

const usuarioService = new UsuarioService()

export default usuarioService