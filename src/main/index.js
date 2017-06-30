import { app } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import createWindow from './createWindow';
import setAppMenu from './setAppMenu';
import checkUpdate from './checkUpdate';

app.on('ready', () => {
  setAppMenu();
  createWindow();
  checkUpdate();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', (_e, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    createWindow();
  }
});
