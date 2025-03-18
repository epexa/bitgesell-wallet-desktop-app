const {
	app,
	BrowserWindow,
	Menu,
	dialog,
} = require('electron');
const { autoUpdater } = require('electron-updater');

let mainWindow;

/* const upsertKeyValue = (obj, keyToChange, value) => {
	const keyToChangeLower = keyToChange.toLowerCase();
	for (const key of Object.keys(obj)) {
		if (key.toLowerCase() === keyToChangeLower) {
			obj[key] = value;
			return;
		}
	}
	obj[keyToChange] = value;
}; */

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		minWidth: 400,
		minHeight: 300,
		icon: `${__dirname}/icons/256.png`,
		webPreferences: {
			devTools: false,
			enableRemoteModule: false,
			sandbox: true,
			webSecurity: true,
			webgl: false,
			contextIsolation: true,
			spellcheck: false,
			enableWebSQL: false,
			nodeIntegration: false,
			plugins: false,
			experimentalFeatures: false,
			allowRunningInsecureContent: false,
		},
	});

	mainWindow.loadFile('www/index.html');

	/* START FIX CORS */
	/* mainWindow.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
		const { requestHeaders } = details;
		upsertKeyValue(requestHeaders, 'Access-Control-Allow-Origin', [ '*' ]);
		callback({ requestHeaders });
	});
	mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
		const { responseHeaders } = details;
		upsertKeyValue(responseHeaders, 'Access-Control-Allow-Origin', [ '*' ]);
		upsertKeyValue(responseHeaders, 'Access-Control-Allow-Headers', [ '*' ]);
		callback({ responseHeaders });
	}); */

	// for electron >= 23
	/* mainWindow.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
		const { requestHeaders } = details;
		upsertKeyValue(requestHeaders, 'Origin', '*');
		upsertKeyValue(requestHeaders, 'Sec-Fetch-Site', 'none');
		upsertKeyValue(requestHeaders, 'Sec-Fetch-Mode', 'no-cors');
		upsertKeyValue(requestHeaders, 'Sec-Fetch-Dest', 'document');
		callback({ requestHeaders });
	}); */
	/* END FIX CORS */

	Menu.setApplicationMenu(null);
};

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-audio');
app.commandLine.appendSwitch('disable-wasm');

app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
	if (url.startsWith('https://api.bitaps.com')) {
		event.preventDefault();
		callback(true);
	}
	else callback(false);
});

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
