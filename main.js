const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let mainWindow;

const boot = () => {
  //Create new window
  mainWindow = new BrowserWindow({
    height: 800,
    width: 760,
    //resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  //Load HTML into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );
};

//Listen for app to be ready
app.on("ready", boot);