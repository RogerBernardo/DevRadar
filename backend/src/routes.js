const { Router } = require('express');
const DevController = require('./controlles/DevController');
const SearchController = require('./controlles/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;