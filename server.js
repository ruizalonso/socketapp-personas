const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = app.listen(3000)
const io = socketio(server)
const PersonaService = require('./services/persona.service')

const personaService = new PersonaService()

app.use(express.static('public'))

io.on('connection', (connectedSocket) => {
  connectedSocket.on('chat', async (data) => {
    const res = await getDatos(data.sender)
    console.log('res', res)
    const { dataValues } = res
    io.sockets.emit('chat', dataValues ?? res)
  })

  connectedSocket.on('typing', (data) => {
    connectedSocket.broadcast.emit('typing', data)
  })
})

const getDatos = async (tel) => {
  return await personaService.findByPhoneNumber(tel)
}
