const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require("./routes");
const http = require('http');
const { setupWebsocket } = require('./websocket.js');


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://root:root@cluster0-qmjxu.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

server.listen(3333);


// Métodos HTTP: GET, PUT, POST, DELETE
/**
 Tipos de Parâmetros:
 Query Params: request.query (Filtros. ordenação, paginação, ...)
 Route Params: request.params (Identificar um recurso na alteração ou na remoção)
 Body: request.body (Dados para a criação ou alteração de um registro)
 */