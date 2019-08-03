const electron = require("electron");
const url = require("url");
const path = require("path");
const getInfo = require("./script");

const { app, BrowserWindow } = electron;

let mainWindow;

const load = () => {
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

const boot = () => {
  load();
  getInfo();
}

//Listen for app to be ready
app.on("ready", boot);