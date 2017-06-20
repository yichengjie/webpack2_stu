var express = require('express');
var app = express();
var port = 8080 ;
var CategoryService = require('./category/category4.js') ;

app.get('/', function (req, res) {
  res.send('Hello World!');
});


//getAllCategoryStaticData 
app.get('/api/queryAllCategory4',function(req, res){
  let category4Data = CategoryService.queryAllCategory4() ;
  let retData = {
      flag:true,
      category4Data
  } ;
  res.json(retData);
}) ;


//queryCategory4ById 
app.get('/api/queryCategory4ById',function(req, res){
  let id = req.query.id ;
  console.info('query url id is : ' + id) ;
  let category4 = CategoryService.queryCategory4ById(id) ;
  let retData = {
      flag:true,
      category4,
  } ;
  res.json(retData);
}) ;


var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});