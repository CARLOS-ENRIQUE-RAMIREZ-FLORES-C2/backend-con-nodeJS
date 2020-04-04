const express = require('express');
const MoviesService = require('../services/movies');

const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async (req, res, next) => {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json({
                data: movies,
                message: "movies listed"
            })
        }
        catch (e) {
            next(e)
        }
    });

    router.get('/:IdMovie', validationHandler({ IdMovie: movieIdSchema }, 'params'), async (req, res, next) => {
        const { IdMovie } = req.params;
        try {
            const movies = await moviesService.getMovie({ IdMovie })
            res.status(200).json({
                data: movies,
                message: "movies find"
            })
        }
        catch (e) {
            next(e)
        }
    });

    router.post('/', validationHandler('createMovieSchema'), async (req, res, next) => {
        const { body: movie } = req;
        try {
            const createdMovie = await moviesService.createMovie({ movie });
            res.status(201).json({
                data: createdMovie,
                message: "movie  created"
            })
        }
        catch (e) {
            next(e)
        }
    });

    router.put('/:IdMovie', validationHandler({ IdMovie: movieIdSchema }, 'params'), validationHandler('updateMovieSchema'), async (req, res, next) => {
        const { IdMovie } = req.params;
        const { body: movie } = req;
        try {
            const updatedMovie = await moviesService.updateMovie({ IdMovie, movie })
            res.status(200).json({
                data: updatedMovie,
                message: "movie updated"
            })
        }
        catch (e) {
            next(e)
        }
    });

    router.delete('/:IdMovie', validationHandler({ IdMovie: movieIdSchema }, 'params'), async (req, res, next) => {
        const { IdMovie } = req.params;
        try {
            console.log(IdMovie);
            const deleteMovie = await moviesService.deleteMovie({ IdMovie })
            res.status(200).json({
                data: deleteMovie,
                message: "movie deleted"
            })
        }
        catch (e) {
            next(e)
        }
    });
}


module.exports = moviesApi;