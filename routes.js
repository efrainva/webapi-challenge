const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
  console.log('router working');
  next();
})    

const db = require('./data/helpers/actionModel.js');

router.get('/', async (req, res) => {
  try{
    const route = await db.get(req.query);
    res.status(200).json(route)
  }catch(err){
    console.log(err);
    res.status(500).json({
      message:'err on get' })
  }
});

module.exports = router;