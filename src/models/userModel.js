const { conn } = require ('../config/conn.js');
const crypt = require ('bcryptjs');

const crearUsuario = async (nombre, apellido, email, password) => {
	const hash = await crypt.hash(password, 4)
	console.log(hash);
	try {
		const [creado] = await conn.query(`INSERT INTO funko_test.user (name, lastname, email, password)
			VALUES ("${nombre}", "${apellido}", "${email}", "${hash}");`)
		return creado
	} catch (error) {
		console.log(error)
	} finally {
		conn.releaseConnection()
	}
}

const login = async (email, password) => {
	const hash = await crypt.hash(password, 12)
	try {	
		const [user] = await conn.query(`SELECT * FROM funko_test.user 
        WHERE email = "${email}" and password = "${hash}";`) //va hash
		return user
	} catch (error) {
		console.log(error)
	} finally {
		conn.releaseConnection()
	}
}

module.exports = {
	crearUsuario,
	login
}