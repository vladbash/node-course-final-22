module.exports = {
    http: {
        port: process.env.PORT || 80
    },
    socket: {
        port: process.env.PORT || 81,
    },
    session: {
        secret: 'hillelNodeCourse'
    },
    jwt: {
        secret: 'jwtsecretkey'
    },
    db: {
        connectionString: process.env.MONGO_URL
    }
};