const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
let mainWindow;

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
    app.quit()
} else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}

function createWindow() {
    mainWindow = new BrowserWindow({width: 900, height: 680})

    app.setUserTasks([
        {
            program: process.execPath,
            arguments: '--new-window',
            iconPath: process.execPath,
            iconIndex: 1,
            title: 'New Window',
            description: 'Create a new window'
        },
        {
            program: process.execPath,
            arguments: '--new-window',
            iconPath: process.execPath,
            iconIndex: 1,
            title: 'Old Window',
            description: 'Open a old window'
        }
    ])

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    )
    mainWindow.on("closed", () => (mainWindow = null))
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})

app.on("activate", () => {
    if (mainWindow === null) createWindow()
})


if (process.platform === 'win32') {
    app.setAsDefaultProtocolClient('connect', process.execPath, [
        path.resolve(process.argv[1])
    ]);
} else {
    app.setAsDefaultProtocolClient('connect');
}

