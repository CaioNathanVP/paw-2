var express  = require('express');
var router = express.Router();

const Message = require('../models/message');

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