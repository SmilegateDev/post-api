var express = require('express');
var router = express.Router();
var Post = require('../models/post'); // 1

// Posts - create ; insert -> insert_ok
router.post('/create', async function(req, res){
  try{
    await Post.create(req.body, function(err, Post){
      console.log("Create Success");
      res.redirect('/');
    });
  } catch (err){
    console.log(err);
  }
});
// Posts - read ; 원하는 정보만 표시~ findOne 메소드
router.post('/read', async function(req,res){
  try{
    Post.findOne({objectid:req.body.id},function(err, Post){
      res.send(Post);
    });
  } catch(err){
    console.log(err);
  }
});
// Posts - edit // 4
/*
router.get('/:id/edit', function(req, res){
  Post.findOne({_id:req.params.id}, function(err, Post){
    if(err) return res.json(err);
    res.render('Posts/edit', {Post:Post});
  });
});

// Posts - update // 5
router.put('/:id', function(req, res){
  Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err, Post){
    if(err) return res.json(err);
    res.redirect('/Posts/'+req.params.id);
  });
});
*/
// Posts - destroy // 6
router.delete('/:id', async function(req, res){
  try { 
      Post.deleteOne({_id:req.params.id}, function(err){
        console.log('delete complete');
      });
  }catch(err){
    console.log(err);
  }

});

module.exports = router;
