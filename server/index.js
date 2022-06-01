'use strict';

const register = require('./register');
const bootstrap = require('./bootstrap');
const destroy = require('./destroy');
const config = require('./config');
const middlewares = require('./middlewares');

module.exports = {
  register,
  bootstrap,
  destroy,
  config,
  middlewares,
};
