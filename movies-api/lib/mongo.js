/**
 * recursos:
 * https://github.com/uokesita/the-little-mongodb-book/blob/master/es/mongodb.markdown
 * https://docs.mongodb.com/manual/crud/
 * https://docs.mongodb.com/manual/reference/method/js-collection/
 * Video 27 platzi
 */
const { MongoClient, Objectid } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponentComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_NAME}/test?retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err)
                        reject(err);

                    console.log('Connected succesfully to mongo db')
                    resolve(this.client.db(this.dbName));
                })
            })
        }
        return MongoLib.connection;
    }

    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        });
    }
    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: Objectid(id) }).toArray();
        })
    }
    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data);
        }).then(result => result.insertedId);
    }
    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ _id: Objectid(id) }, { $set: data }, { upsert: true });
        }).then(result => result.upsertId || id);
    }
    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: Objectid(id) });
        }).then(() => id)
    }
});

module.exports = MongoLib;