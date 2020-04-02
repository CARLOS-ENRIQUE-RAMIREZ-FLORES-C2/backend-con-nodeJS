const express = require('express');
const app = express();
const { config } = require('./config/index');

app.get('/:amo', (req, res) => {
    const amo = parseInt(req.params.amo);
    if(amo){
        if ((((amo % 4 == 0)
            && (amo % 100 != 0))
            || (amo % 400 == 0))
        )
            res.send(`El año ${amo} es bisiesto!`)
        else
            res.send(`El año ${req.params.amo} NO es bisiesto`);
    }else{
        res.send(`Dame un año en la url en 4 digitos`);
    }
});

app.listen(config.port, () =>{
    console.log(`Corriendo en http://localhost:${config.port}`)
})