const {
	app,
	BrowserWindow,
	Menu,
	dialog,
} = require('electron');
const { autoUpdater } = require('electron-updater');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		minWidth: 400,
		minHeight: 300,
		icon: `${__dirname}/icons/256.png`,
		webPreferences: {
			devTools: false,
			webSecurity: false,
			webgl: false,
			contextIsolation: true,
			spellcheck: false,
			enableWebSQL: false,
		},
	});

	mainWindow.loadFile('www/index.html');

	Menu.setApplicationMenu(null);
};

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});

	autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

autoUpdater.on('update-available', () => {
	dialog.showMessageBox(mainWindow, {
		type: 'info',
		message: 'A new update is available. Downloading now...',
		buttons: [ 'Close' ],
	});
});

autoUpdater.on('update-downloaded', () => {
	dialog.showMessageBox(mainWindow, {
		type: 'question',
		message: 'Update Downloaded. It will be installed on restart. Restart now?',
		buttons: [ 'Close', 'Restart' ],
	})
			.then((result) => {
				if (result.response === 1) {
					autoUpdater.quitAndInstall();
				}
			});
});
