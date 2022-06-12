const { Server } = require('socket.io');
const config = require('config');
const { onUpdate } = require('./document');

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection', socket => {
    socket.on('join', id => {
        socket.join(id);
    });
    
    socket.on('onUpdate:client', async (payload) => {
        console.log('payload: ', payload);
        const doc = await onUpdate(payload);
        io.to(payload.id).emit('onUpdate:server', doc);
    });
});

const init = () => {
    io.listen(config.get('socket.port'));
};

module.exports = {
    init,
    io
};