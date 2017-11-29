const {app, BrowserWindow} = require('electron')
const electronClient = require('electron-connect').client

const path = require('path')
const url = require('url')

/**
 * Main frame.
 */
let win

/**
 * Create a new window.
 *
 * @param {int} width
 * @param {int} height
 * @param {string} view
 * @param {boolean} debug
 */
exports.createWindow = (width, height, view, debug) => {
  var frame = new BrowserWindow({
    minWidth: width,
    width: width,
    minHeight: height,
    height: height,
    frame: false,
    resizable: true,
    show: false,
    webPreferences: {
      experimentalFeatures: true
    },
    icon: './dist/img/icon.ico'
  })

  if (view !== undefined) {
    frame.loadURL(url.format({
      pathname: path.join(__dirname, `dist/views/${view}.html`),
      protocol: 'file',
      slashed: true
    }))
  }

  frame.on('close', () => {
    frame = null
  })

  if (debug) frame.webContents.openDevTools()

  return frame
}

/**
 * Once the application is fully loaded, the index frame is executed.
 */
app.on('ready', () => {
  win = exports.createWindow(1000, 600, 'index', true)
  electronClient.create(win)

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
    app.quit()
  })
})
