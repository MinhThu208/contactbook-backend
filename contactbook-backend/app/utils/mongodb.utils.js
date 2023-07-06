const { MongoClient } = require("mongodb");

class MongoDB{
    static connect = async (uri) =>{
        if(this.client) return this.client;
        return this.client;
    };
}

module.exports = MongoDB;