module.exports = {
    http: {
        port: 80
    },
    session: {
        secret: 'hillelNodeCourse'
    },
    db: {
        connectionString: process.env.MONGO_URL
    }
};