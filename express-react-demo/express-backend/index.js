  const express = require('express');
  const app = express();

  //解决跨域请求
  const cors = require('cors')
  app.use(cors());


  //使用 Mongoose 连接 JS 和 MongoDB
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/express-react-demo');
  const User = require('./models/user')

  let db = mongoose.connection;
  db.on('error', console.log);
  db.once('open', function() {
    console.log('success!')
  });

  //GET /users
  app.get('/users',function (req,res) {
    // res.send({username:'fightingljm'});//res 负责把数据从后台发送给前台
    User.find().exec(function(err, users) {
      // console.log(users);
      res.json({users});
    })
  })

  // app.get('/users/:id',function (req,res) {
  //   console.log(req.params.id);//req 接收前台发送的请求
  // })
  app.get('/users/:id',function (req,res) {
    User.findById(req.params.id,function(err, user) {
      console.log(user);
      res.json({user});
    })
  })

  app.listen(3000,function () {
    console.log('running on port 3000...');
  })
