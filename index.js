const express = require ('express')
const routerProductos = require('./router/products.js');

const PORT = 8080;
const app = express();
const server = app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
server.on('error', error => console.log(`Error: ${error}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/api', routerProductos);