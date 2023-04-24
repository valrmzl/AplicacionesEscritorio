function middleware( req, res, next){
    /*
    console.log('pase por aqui');
    next();*/
    if(req.query.token==='123'){
        console.log('si tengo el token 123');
        req.nombre='Valeria';
        next();
    } else{
        res.status(401).send('usuario no autenticado');
    }
}


module.exports = middleware;