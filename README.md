# Bitgesell Wallet Electron

------------

## Build versions

- ### Linux (Snap): https://snapcraft.io/bitgesell-wallet
- ### Linux (AppImage): https://github.com/epexa/bitgesell-wallet-electron/releases/download/v0.8.3/Bitgesell-Wallet-0.8.3.AppImage
- ### Linux (deb): https://github.com/epexa/bitgesell-wallet-electron/releases/download/v0.8.3/bitgesell-wallet_0.8.3_amd64.deb
- ### Windows: https://github.com/epexa/bitgesell-wallet-electron/releases/download/v0.8.3/Bitgesell-Wallet-Setup-0.8.3.exe
- ### Windows (portable): https://github.com/epexa/bitgesell-wallet-electron/releases/download/v0.8.3/Bitgesell-Wallet-0.8.3.exe

------------

## Help environment

- ### 1) PRE
`npm install`

- ### 2) DEVELOP
`npm start`

- ### 3) BUILD

1. Rename [electron-builder-example.yml](electron-builder-example.yml) to `electron-builder.yml`
2. Specify [GitHub token](https://github.com/settings/tokens) in electron-builder.yml

`npm run build`

- ### 4) DEPLOY
`npm run deploy`
