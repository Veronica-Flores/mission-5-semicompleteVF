const { conn } = require('../config/conn.js');

const getItemLicence = async () => {
    try {
        const [rows] = await conn.query('SELECT licence_name, licence_description, licence_image FROM licence;');
        //console.log(rows);
        return rows;
    } catch (error) {
        //console.log(error);
        return "No se pudo obtener las licencias de items.";
    } finally {
        conn.releaseConnection();
    }
}

const getAll = async (params) => {
    try {
        const [rows] = await conn.query('SELECT product_id, product_name, price, product_description, dues, image_front, image_back, licence_name FROM product INNER JOIN licence ON product.licence_id = licence.licence_id LIMIT ?;', params);
        //console.log(rows);
        return rows;
    } catch (error) {
        //console.log(error);
        return "No se pudo obtener la lista de items.";
    } finally {
        conn.releaseConnection();
    }
}

const getById = async (id) => {
    try {
        //console.log("entro al metodo", id);
        const [item] = await conn.query('SELECT product_id, product_name, price, product_description, dues, image_front, image_back, licence_name FROM product INNER JOIN licence ON product.licence_id = licence.licence_id WHERE product_id = ?;', id);
        //console.log("este es el modelo", item);
        return item [0];
    } catch (error) {
        //console.log(error);
        return "No se pudo obtener el item.";
    } finally {
        conn.releaseConnection();
    }
}

const getAll2 = async () => {
    try {
        const [rows] = await conn.query('SELECT product_id, product_name, sku, licence_name FROM product INNER JOIN licence ON product.licence_id = licence.licence_id ORDER BY product.product_id;');
        return rows;
    } catch (error) {
        return "No se pudo obtener la lista de items.";
    } finally {
        conn.releaseConnection();
    }
}

const crearItem = async (categoria, licencia, nombre, descripcion, sku, precio, stock, descuento, cuotas) => {
    try {
        const [itemNuevo] = await conn.query(`INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id)
        VALUES ("${nombre}", "${descripcion}", "${precio}", "${stock}", "${descuento}", "${sku}", "${cuotas}", "", "", "${licencia}", "${categoria}");`)
		return itemNuevo;
	} catch (error) {
		//console.log(error)
        return "No se pudo crear el item.";
	} finally {
		conn.releaseConnection()
	}
}

const eliminarItem = async (id) => {
    try {
        const [itemEliminado] = await conn.query('DELETE FROM product WHERE product_id = ?;', [id]);
        console.log(itemEliminado);
        return itemEliminado;
    } catch (error) {
        console.log(error)
        return "No se pudo eliminar el item."; 
    } finally {
        conn.releaseConnection()
    }
}

const traerItem = async (id) => {
    try {
        const [item] = await conn.query('SELECT product_id, product_name, price, product_description, dues, sku, licence_id, category_id, discount, stock FROM product WHERE product_id = ?;', id);
        console.log(item[0]);
        return item [0];
    } catch (error) {
        //console.log(error);
        return "No se pudo traer el item.";
    } finally {
        conn.releaseConnection();
    }
}

const actualizarItem = async (categoria, licencia, nombre, descripcion, sku, precio, stock, descuento, cuotas, id) => {
    try {
        console.log(descripcion);
        const [itemActualizado] = await conn.query(`UPDATE product 
        SET
            product_name = "${nombre}"
            , product_description = "${descripcion}"
            , price = "${precio}"
            , stock = "${stock}"
            , discount = "${descuento}"
            , sku = "${sku}"
            , dues = "${cuotas}"
            , licence_id = "${licencia}"
            , category_id = "${categoria}"
        WHERE product_id = "${id}";`)
		return itemActualizado;
	} catch (error) {
		//console.log(error)
        return "No se pudo editar el item.";
	} finally {
		conn.releaseConnection()
	}
}

module.exports = {
    getItemLicence,
    getAll,
    getById,
    getAll2,
    crearItem,
    eliminarItem,
    traerItem,
    actualizarItem
}