const config = {
    db:{
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:21017/contactbook"
    }
};

module.exports = config;