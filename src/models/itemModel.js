const { conn } = require('../config/conn.js');

/*const getItem = async () => {
    try {
    const [rows] = await conn.query('SELECT * FROM funko_test.product;');
    return rows;
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
   }

   module.exports = {
    getItem
   }
*/

const getAll = async (params) => {
    try {
        const [rows] = await conn.query('SELECT product_id, product_name, price, product_description, dues, image_front, image_back, licence_name FROM funko_test.product INNER JOIN funko_test.licence ON funko_test.product.licence_id = funko_test.licence.licence_id LIMIT ?;', params);
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
        const [item] = await conn.query('SELECT product_id, product_name, price, product_description, dues, image_front, image_back, licence_name FROM funko_test.product INNER JOIN funko_test.licence ON funko_test.product.licence_id = funko_test.licence.licence_id WHERE product_id = ?;', id);
        //console.log("este es el modelo", item);
        return item [0];
    } catch (error) {
        //console.log(error);
        return "No se pudo obtener el item.";
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getAll,
    getById
}