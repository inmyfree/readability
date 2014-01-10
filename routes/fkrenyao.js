/**
 * Created by inmyfree on 1/2/14.
 */

/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log(req);
    res.render('index', { title: 'Fk renyao' });
};

exports.demo = function(req, res){
    console.log(req);
    res.render('demo', { title: 'Fk renyao',content:"content contentcontentcontentcontent" });
};

