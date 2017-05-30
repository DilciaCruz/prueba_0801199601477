var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prueba de Seminario de Software' });
});

router.get('/informacion', function(req,res,next){
  res.render('informaciongeneral',{"txtmensaje":""});
});

var mensaje = [];

router.post('/informacion',function(req,res,next){
  console.log(req.body);
    mensaje.push(req.body.txtmensaje.concat(" Prueba"));
    var msgs = mensaje;
    var rtObject = {}; // {"txtEmail": req.body.txtEmail, "msg":msgs};
    rtObject.txtmensaje = req.body.txtmensaje;
    rtObject.msg= msgs;
  res.render('informaciongeneral', rtObject);
});

router.get('/datosgenerales', function(req,res,next){
  var datos = [
                {"Nombre":"Dilcia","Apellido":"Cruz","Identidad":"0801199601477","Telefono":"32647890","Correo":"drosycruz@gmail.com"}
              ];
  res.json(datos);

});



module.exports = router;
