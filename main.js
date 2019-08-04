const electron = require("electron");
const url = require("url");
const path = require("path");
const getInfo = require("./script");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

const load = () => {
  //Create new window
  mainWindow = new BrowserWindow({
    height: 760,
    width: 750,
    //resizable: false,
    icon: path.join(__dirname, "assets/icons/icon.png"),
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

  //Build Menu
  //mainWindow.removeMenu();
};

//Catch Item:add
ipcMain.on("item:add", async(e, item) => {
  const input = await getInfo(item);
  mainWindow.webContents.send("user:input", input);
});




//Listen for app to be ready
app.on("ready", load);
