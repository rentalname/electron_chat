import { app, autoUpdater, dialog } from 'electron';

const UPDATE_SERVER = 'https://secure-forest-36682.herokuapp.com';

function confirmRestart(releaseNotes) {
  return new Promise((resolve, reject) => {
    dialog.showMessageBox({
      type: 'info',
      title: 'Update Available',
      message: 'The new version has been downloaded. Restart the application to apply the updates.',
      detail: releaseNotes,
      buttons: ['Restart', 'Later'],
    }, (response) => {
      if (response === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
}

function checkUpdate() {
  let feedURL;
  if (process.platform === 'win32') {
    feedURL = `${UPDATE_SERVER}/update/win32/${app.getVersion()}`;
  } else if (process.platform === 'darwin') {
    feedURL = `${UPDATE_SERVER}/update/darwin_${process.arch}/${app.version()}`;
  } else {
    return;
  }

  autoUpdater.on('update-downloaded', (event, releaseNotes) => {
    confirmRestart(releaseNotes).then(() => {
      autoUpdater.quitAndInstall();
    });
  });

  autoUpdater.setFeedURL(feedURL);
  autoUpdater.checkForUpdates();
}

export default checkUpdate;
