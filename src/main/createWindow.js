import { BrowserWindow } from 'electron';

const electron = require('electron');
const loadDevtool = require('electron-load-devtool');

let win;
function createWindow() {
  win = new BrowserWindow();
  win.loadURL(`file://${__dirname}/../../index.html`);
  loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
  win.webContents.openDevTools();
  win.on('close', () => {
    win = null;
  });
}

export default createWindow;
