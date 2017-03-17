const express = require('express');
const app = express();
// app.use(express.static('public'));//把 pubilc/ 文件夹 架设成一个静态页面

const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))//使用 req.session 接口

const bodyParser =require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))//parse application/x-www-form-urlencoded

const pug = require('pug');
app.set('view engine','pug')

app.get('/',function (req,res) {
  console.log('home page',req.session.username);
  // res.sendFile('index.html',{root:'public'})
  let currentUser = req.session.username;
  res.render('index',{username:currentUser})
})
app.get('/login',function (req,res) {
  res.sendFile('login.html',{root:'public'})
})
app.get('/logout',function (req,res) {
  req.session.destroy();
  res.redirect('/');
})
app.post('/login',function (req,res) {
  let username = req.body.username;
  req.session.username = username;
  //User.find({username:username})
  //如果数据库中能找到这个用户,同事密码匹配,这样才算登陆成功
  if(true){
    res.redirect('/')
  }//页面重定向
})

app.listen(3006,function () {
  console.log('running on port 3006...');
})
