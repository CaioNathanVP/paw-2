var express = require('express'); 
var router = express.Router();
var User = require('../models/user');

router.get('/node-mongodb-mongoose-user', (req, res, next) => {
    res.render('node');
});

router.get('/node-mongodb-mongoose-user-busca', async (req, res, next) => {
    try{
        const userFind = await User.findOne({});
        res.render('node', { primeiro_nome: userFind.primeiro_nome, sobrenome: userFind.sobrenome ,
            senha: userFind.senha, email: userFind.email});
    }
    catch(err){
        return res.send('Error!!!');
    }
});

router.post('/node-mongodb-mongoose-user', async (req, res, next) => {

    var emailVar = req.body.email;
    var userObject = new User({
        primeiro_nome: 'Stefano',
        sobrenome: 'Silvestri',
        senha: "segredo",
        email: emailVar

    });
    await userObject.save();

    res.redirect('/node-mongodb-mongoose-user');

});


router.get('/', (req, res, next) => {
    res.render('index');
});

// NOVO
router.get('/message', (req, res, next) => {
    res.render('node', {message: 'nova rota de mensagem.'});
});
// NOVO

router.post('/message',(req,res,next) =>{
    let messageVar = req.body.messageBody;
    res.redirect('/message/'+ messageVar);
} );

router.get('/message/:msgParam', (req,res,next) => {
    res.render('node', {message: req.params.msgParam});
});



module.exports = router; 