var read = require('node-readability');

exports.index = function(req, res){
    console.log(req.query.dsturl);
    if(req.query.dsturl){
        read(req.query.dsturl, function(err, article) {
            if(err == null){
                res.render('readability', { title: article.title , content: article.content });
            }else{
                res.render('readability', { title: err[0].type , content: err[0].message });
            }
        });
    }else{
        res.render('readability', { title: "处理错误" , content:  "处理错误" });
    }
};

exports.initRouter = function(req, res){
    req.query.dsturl = "http://server.chinabyte.com/151/12820151.shtml";
    console.log(req.query.dsturl);
    if(req.query.dsturl){
        read(req.query.dsturl, function(err, article) {
            if(err == null){
                res.render('readability', { title: article.title , content: article.content });
            }else{
                res.render('readability', { title: err[0].type , content: err[0].message });
            }
        });
    }else{
        res.render('readability', { title: "处理错误" , content:  "处理错误" });
    }
};



