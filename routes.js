const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
  console.log('router working');
  next();
})    

const db = require('./data/helpers/projectModel.js');
const actionb = require('./data/helpers/actionModel.js');
//GETS
router.get('/:id', async (req, res) => {
  try{
    const root = await db.get(req.id);
    res.status(200).json(root)
  }catch(err){
    console.log(err);
    res.status(500).json({
      message:'err on get' })
  }
});
//
router.get('/pro/:id',async (req,res)=> {
  try{
    const root = await actionb.get(req.id)
    res.status(200).json(root)
  }catch(er){
    console.log(err);
    res.status(500).json({
      message:'err on second get' })
  }
});
//POST

router.post('/post/1',async(req,res)=>{
  //const postinfo = {req.body}
  try{
    const root = await db.insert(req.body);
    res.status(201).json(root);
  }catch(er){
    console.log(err);
    res.status(500).json({
      message:'err on post' })
  }
})

//UPDATE

router.put('/put/:id',async(req,res)=> {
  try{
    const root = await db.update(req.parm.id, req.body);
    if(root){
      res.status(200).json(root);
    }else{
      res.status(404).json({
        message:'something happened during update'
      })
    }
  }catch(er){
    console.log(er);
      res.status(500).json({
      message:'updating is not working'
    })
  }
})
//
router.put('/pro/:id',async(req,res)=> {
  try{
    const root = await actionb.update(req.params.id, req.body)
    if(root){
      res.status(200).json(root)
    }else{
      res.status(404).json({
        message:'something happened during update'
      })
    }
  }catch(err){
    console.log(err);
    res.status(500).json({
      message:'something happen in project update'
    })
  }
})

//DELETE

router.delete('/:id',async(req,res)=>{
  try{
    const item = await db.remove(req.params.id);
    if (item > 0) {
      res.status(200).json({ message: 'router deleted' });
    } else {
      res.status(404).json({ message: 'wrong router' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something happened',
    });
  }
})

router.delete('/pro/:id',async(req,res)=> {
    //const items = req.param;
    try{
    const item = await db.remove(req.params.id);
    if (item === 0) {
      res.status(404).json({ message: 'no user' });
    } else {
      res.status(200).json({ message: 'deleting'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something happened',
    });
  }

})

module.exports = router;