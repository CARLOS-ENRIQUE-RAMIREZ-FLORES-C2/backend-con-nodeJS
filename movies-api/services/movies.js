//const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');
class MoviesService {
    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }
    async getMovies({ tags } = {}) {
        const query = tags && { tags: { $in: tags } };
        const movies = await this.mongoDB.getAll(this.collection, query);
        return movies || [];
    }

    async getMovie({ IdMovie }) {
        const movies = await this.mongoDB.get(this.collection, IdMovie);
        return movies || [];
    }

    async createMovie({ movie }) {
        const movies = await this.mongoDB.create(this.collection, movie);
        return movies || [];
    }

    async updateMovie({ IdMovie, movie } = {}) {
        const movies = await this.mongoDB.update(this.collection, IdMovie, movie);
        return movies || [];
    }

    async deleteMovie({ IdMovie }) {
        const movies = await this.mongoDB.delete(this.collection, IdMovie);
        return movies || [];
    }
}

module.exports = MoviesService;