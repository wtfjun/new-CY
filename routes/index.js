var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { 
  	title: 'CY-Tech home',
  	_layoutFile: 'index/layout'
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index/contact', { 
  	title: 'contact',
  	_layoutFile: 'index/layout'
  });
});

/* GET protect page. */
router.get('/protect', function(req, res, next) {
  res.render('index/protect', { 
    title: 'protect',
    _layoutFile: 'index/layout'
  });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('index/service', { 
    title: 'service',
    _layoutFile: 'index/layout'
  });
});

module.exports = router;
