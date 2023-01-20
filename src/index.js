// include the Node.js 'path' module at the top of your file
const {app, BrowserWindow} = require("electron")
const path = require('path')

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
      nodeIntegration: true
    }
  })

  win.loadFile('src/index.html')

  // load developer tools
  if(process.env.NODE_ENV === 'developer')
    win.webContents.openDevTools()
}

// when the app is loaded and ready
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// when the all open windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') 
        app.quit()
})
