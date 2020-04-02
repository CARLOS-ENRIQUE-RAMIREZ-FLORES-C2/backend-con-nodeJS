const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/',async (req, res, next) =>{
        try{
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: "movies listed"
            })
        }
        catch(e){
            next(e)
        }
    });

    router.get('/:IdMovie',async (req, res, next) =>{
        try{
            const movies = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movies,
                message: "movies find"
            })
        }
        catch(e){
            next(e)
        }
    });

    router.post('/',async (req, res, next) =>{
        try{
            const createdMovie = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovie,
                message: "movie  created"
            })
        }
        catch(e){
            next(e)
        }
    });

    router.put('/:IdMovie',async (req, res, next) =>{
        try{
            const updatedMovie = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovie,
                message: "movie updated"
            })
        }
        catch(e){
            next(e)
        }
    });

    router.delete('/:IdMovie',async (req, res, next) =>{
        try{
            const deleteMovie = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deleteMovie,
                message: "movie deleted"
            })
        }
        catch(e){
            next(e)
        }
    });
}


module.exports =  moviesApi;