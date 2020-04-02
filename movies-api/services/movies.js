const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }

    async getMovie() { 
        const movies = await Promise.resolve(moviesMock[0]);
        return movies || [];
    }
    
    async createMovie() { 
        const movies = await Promise.resolve(moviesMock[0].id);
        return movies || [];
    }

    async updateMovie() { 
        const movies = await Promise.resolve(moviesMock[0].id);
        return movies || [];
    }   

    async deleteMovie() { 
        const movies = await Promise.resolve(moviesMock[0].id);
        return movies || [];
    }
}

module.exports = MoviesService;