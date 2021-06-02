"use strict"
const express = require("express")
const serverless = require("serverless-http")
const request = require('request')
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()
const parser = require('ua-parser-js');


app.use(bodyParser.json())
app.use("/.netlify/functions/", router) // path must route to lambda
//app.use("/", router)

router.get("/post/:uid", (req, res) => {
	var curUrl = req.protocol + '://' + req.get('host') + req.originalUrl.split("?").shift();
	//	console.log(req.toString());
	   var ua = parser(req.headers['user-agent']);
	   var showTruePage = false;
				//var fbclid = typeof req.query.fbclid !== 'undefined';
	    if (!req.headers['user-agent'].startsWith('facebookexternalhit/1.1') &&
       req.headers['user-agent'] !== 'Facebot'){
		if( typeof req.query.slug !== 'undefined')
		showTruePage = true;


	   }
	   if (req.headers['user-agent'].startsWith('facebookexternalhit/1.1') ||
       req.headers['user-agent'] === 'Facebot'){
		showTruePage = false;

		if( typeof req.query.slug === 'undefined' && typeof req.query.fbclid !== 'undefined')
		res.end()
	
	   }
	   if(showTruePage){
				  res.redirect('https://urdunews.ga/'+req.query.slug+'?fbclid='+req.query.fbclid);
	   }
	else{
var fetchUrl = 'https://urdunews.ga/graphql?query=query%20MyQuery%20{%20post(id:%20'+req.params.uid+',%20idType:%20DATABASE_ID)%20{%20date%20content%20excerpt%20databaseId%20slug%20status%20uri%20title%20featuredImage%20{%20node%20{%20sourceUrl%20}%20}%20categories(last:%201)%20{%20nodes%20{%20name%20}%20}%20}%20}';
request.get(fetchUrl,
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
      //      console.log(body);
			   res.writeHead(200, { "Content-Type": "text/html" })
			    

 res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">')
 res.write('<title>'+body.data.post.title+'</title>')
 res.write('<meta property="og:locale" content="ur_PK">'+
'<meta property="og:type" content="article">'+
'<meta property="og:title" content="'+body.data.post.title+'">'+
'<meta property="og:description" content="'+body.data.post.excerpt+'">'+
'<meta property="og:url" content="'+curUrl+'">'+
'<meta property="og:site_name" content="UrduNews">'+
'<meta property="article:section" content="'+body.data.post.categories.nodes[0].name+'">'+
'<meta property="og:image" content="'+body.data.post.featuredImage.node.sourceUrl+'">'+
'<meta property="og:image:alt" content="'+body.data.post.title+'">')
res.write('<style>'+
'html{direction:rtl}'+
'body{font-size:18px}'+
'img { width: 100%; height: auto; }'+
'ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; }'+
'li {float: left; }'+
'li a { display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; }'+
'li a:hover:not(.active) { background-color: #111; }'+
'.active { background-color: #4CAF50; }'+
'</style>'+
'</head>'+
'<body style="background:#eee;">'+
'<div style="padding:20px;margin:30px auto;padding:20px;max-width:800px;background:white;box-shadow: 5px 5px 5px #888888;">'+
'<div>'+
'<ul>'+
'<li><a href="#home">Home</a></li>'+
'<li><a href="#news">News</a></li>'+
'<li><a href="#contact">Contact</a></li>'+
'<li style="float:right"><a class="active" href="#about">About</a></li>'+
'</ul>'+
'</div>'+
'<div>'+
'<h1>'+body.data.post.title+'</h1>'+
'<p>'+body.data.post.content+'</p>'+
'</div>'+
'</div>'+
'</body>'+
'</html>');
   res.end()

        }
    }
);
	}
 //res.writeHead(200, { "Content-Type": "text/html" })
 // res.write("<h1>Up and running</h1>")
})
/*
router.post("/doSomething", async (req, res) => {
  try {
    // maybe do some database interaction or third-party API call here!
    res.status(200).send({ data: "success" })
  } catch (err) {
    console.log(err)
    res.status(400).send({ error: "bad request" })
  }
})
*/
module.exports = app
module.exports.handler = serverless(app)
