const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = 'mongodb://localhost:27017';
const dbName = 'shoppingdb';

mongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to mongodb server");
    const db = client.db(dbName);
    const collection = db.collection('cln_products');
    client.close();
});