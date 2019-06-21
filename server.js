const express = require ('express');
const logger = require('morgan')
const helmet = require('helmet');
const server = express();

const route = require('./routes.js');


server.use(express.json());
server.use(helmet());
server.use(logger('dev'));
server.use('/api', route);
server.use(methodlogger);

server.use('/',(req,res)=> {
  res.send('<h1>start</h1>')
})


function methodlogger(req, res, next) {
  console.log(`${req.method} request`)
  next();
};
module.exports = server ;