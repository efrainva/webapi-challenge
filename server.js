const express = require ('express');
const logger = require('morgan')
const helmet = require('helmet');

const route = require('./routes.js');

const server = express();
server.use('/',(req,res)=> {
  res.send('<h1>start</h1>')
})

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));
server.use('/', route);
server.use(methodlogger);



function methodlogger(req, res, next) {
  console.log(`${req.method} request`)
  next();
};
module.exports = server ;