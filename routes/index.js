var settings = require("./settings");

exports.index = function(req, res){
  res.render('index', { title: 'Google JavaScript Experiment' });
};

exports.message = function(req, res){
  res.send(settings.message);
};

