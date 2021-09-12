"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesSocket = void 0;
class RoutesSocket {
    constructor(socket) {
        this.io = socket;
        this.io.on('connection', skt => {
            skt.on('teste', () => console.log('chegou'));
        });
    }
}
exports.RoutesSocket = RoutesSocket;
