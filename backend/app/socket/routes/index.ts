export class RoutesSocket {
  io: any
  constructor (socket) {
    this.io = socket
    this.io.on('connection', skt => {
      skt.on('teste', () => console.log('chegou'))
    })
  }
}