var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	ig.user_self_media_recent(function(err,medias,pagination,remaining,limit){
		res.render('pages/index', { grams:medias});
	});
});
ig.use({
	access_token : '1479648063.1677ed0.cbf01228479a408e81b6582e3747c864',
});
app.listen(8080);
console.log('App has started!');