module.exports = {
    http: {
        port: process.env.PORT || 80
    },
    session: {
        secret: 'hillelNodeCourse'
    },
    db: {
        connectionString: process.env.MONGO_URL
    }
};