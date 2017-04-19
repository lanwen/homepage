const WebSocket = require('ws')
const chokidar = require('chokidar')
const path = require('path')

const contentPath = process.env['CONTENT_PATH']

if (!contentPath) {
  throw new Error('Please provide the env var CONTENT_PATH')
}

const wss = new WebSocket.Server({
  port: 5002,
})

let connections = []

wss.on('connection', (ws) => {
  connections.push(ws)
  ws.on('close', () => {
    const i = connections.indexOf(ws)
    connections.splice(i, 1)
  })
})

console.log(`Watching ${contentPath} for changes`)
const watcher = chokidar.watch(path.join(contentPath, '/**/*.*'))

watcher.on('all', () => {
  connections.forEach(ws => {
    ws.send('change')
  })
})
