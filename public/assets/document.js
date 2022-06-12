console.log('document ready');

const socket = io('ws://localhost:3001');
const contentAreaEl = document.getElementById('contentArea');

const id = location.pathname.split('/')[2];

socket.on('connect', () => {
    socket.emit('join', id);

    contentAreaEl.addEventListener('blur', () => {
        socket.emit('onUpdate:client', { 
            id,
            name: document.getElementById('floatingInput').value,
            content: contentAreaEl.value
        });
    });

    socket.on('onUpdate:server', payload => {
        console.log('client', payload);
        document.getElementById('floatingInput').value = payload.name;
        contentAreaEl.value = payload.content;
    });
});