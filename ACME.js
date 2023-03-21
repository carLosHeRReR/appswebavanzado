var http = require('http');
fs = require('fs');

http.createServer(function(req, res){

    if (req.url == '/nuestross.html') {

        fs.readFile('./nuestross.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/nosotros.html') {

        fs.readFile('./nosotros.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

    if (req.url == '/contacto.html') {

        fs.readFile('./contacto.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/catolog.html') {

        fs.readFile('./catolog.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/') {

        fs.readFile('./acme.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

}).listen(8085);