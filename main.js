const { app, BrowserWindow, ipcMain } = require('electron')

/**
 * Main frame.
 */
let win

/**
 * Create a new window.
 *
 * @param {int} width
 * @param {int} height
 * @param {boolean} debug
 */
exports.createWindow = (width, height, debug) => {
  var frame = new BrowserWindow({
    minWidth: width,
    width: width,
    minHeight: height,
    height: height,
    frame: false,
    resizable: true,
    show: false,
    icon: `file://${__dirname}/dist/favicon.ico`
  })

  frame.loadURL(`file://${__dirname}/dist/index.html`)

  frame.on('close', () => {
    frame = null
  })

  frame.on('focus', () => {
    frame.webContents.send("focus");
  })

  frame.on('blur', () => {
    frame.webContents.send("blur");
  })
  
  if (debug) frame.webContents.openDevTools()

  return frame
}

ipcMain.on("minimize", (event) => {
  BrowserWindow.fromWebContents(event.sender).minimize();
});

ipcMain.on("resize", (event) => {
  if (BrowserWindow.fromWebContents(event.sender).isMaximized()) {
    BrowserWindow.fromWebContents(event.sender).maximize();
  } else {
    BrowserWindow.fromWebContents(event.sender).unmaximize();
  }
});

ipcMain.on("close", (event) => {
  BrowserWindow.fromWebContents(event.sender).close();
});


/**
 * Once the application is fully loaded, the index frame is executed.
 */
app.on('ready', () => {
  win = exports.createWindow(1000, 600, true)

  /**
     * The window is shown as soos as it's fully loaded.
     */
  win.on('ready-to-show', () => {
    win.show()
  })

  /**
     * The application will close when window closes event.
     */
  win.on('closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
})
