const socket = io.connect('localhost:3000')

const output = document.getElementById('output')
const feedback = document.getElementById('feedback')
const sender = document.getElementById('telefono')
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', () => {
  socket.emit('chat', {
    sender: sender.value,
  })
})

socket.on('chat', (data) => {
  feedback.innerHTML = ''
  output.innerHTML += `
  <p><strong> ${data.dir_nombre ?? data}:</strong> 
  ${data.dir_tel ?? ''}, ${data.dir_direccion ?? ''}, ${
    data?.ciudad?.ciud_nombre ?? ''
  } </p>`
})

socket.on('typing', (data) => {
  feedback.innerHTML = `${data.sender} typing...`
})
