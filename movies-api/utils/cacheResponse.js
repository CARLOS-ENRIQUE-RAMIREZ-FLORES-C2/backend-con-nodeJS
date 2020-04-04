const { config } = require('../config'); 

function cacheResponse(res, seconds){
    if(!config.dev)
        res.set('Cache-Control', `piblic, max-age=${seconds}`);

}

module.exports = cacheResponse;