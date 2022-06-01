'use strict';
const middlewares = require('./middlewares');
module.exports = ({ strapi }) => {
  // registeration phase
  strapi.server.use(middlewares.randomSort);
};
