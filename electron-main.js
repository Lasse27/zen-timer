import { app, BrowserWindow } from 'electron'
import { join } from 'path'

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    resizable: false,
    minimizable: true,
    maximizable: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js'), // optional
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:8080')
    win.webContents.openDevTools()
  } else {
    win.loadFile(join(__dirname, 'dist/index.html')) // Build der Vue App
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (win === null) createWindow()
})
