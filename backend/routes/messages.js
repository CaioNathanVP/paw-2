var express  = require('express');
var router = express.Router();

const Message = require('../models/message');

router.get('/', async function (req, res, next) {
    try {
        const messageFindTodos = await Message. find({});
        res. status(200).json({
            myMsgSucesso : "Mensagens recuperadas com sucesso",
            objSMessageSRecuperadoS : messageFindTodos});
    } catch (err) {
        return res.status(500).json({
            myErrorTitle: "Serve erro: algo deu errado",
            myError : err
        });
    }
}
);
router.post('/', async function(req,res,next){
    const messageObject = new Message({
        content: req.body.content,
        user: req.body.user
    });

    try{
        const messageSave = await messageObject.save();
        console.log(messageSave);

        res.status(201).json({
            myMsgSucesso: "Messagem salva com sucesso",
            objMessageSave: messageSave
        });
    }
    catch(err){
        return res.status(500).json({
            myErrorTitle: "Serve erro",
            myError : err
        });
    }
});

module.exports = router;