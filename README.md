# Bitgesell Wallet Desktop App

------------

## Build versions

- ### Linux (Snap): https://snapcraft.io/bitgesell-wallet
- ### Linux (AppImage): https://github.com/epexa/bitgesell-wallet-desktop-app/releases/download/v0.9.7/Bitgesell-Wallet-0.9.7.AppImage
- ### Linux (deb): https://github.com/epexa/bitgesell-wallet-desktop-app/releases/download/v0.9.7/bitgesell-wallet_0.9.7_amd64.deb
- ### Windows: https://github.com/epexa/bitgesell-wallet-desktop-app/releases/download/v0.9.7/Bitgesell-Wallet-Setup-0.9.7.exe
- ### Windows (portable): https://github.com/epexa/bitgesell-wallet-desktop-app/releases/download/v0.9.7/Bitgesell-Wallet-portable.exe

------------

## Help environment

- ### 1) PRE
`npm ci`

- ### 2) DEVELOP
`npm start`

- ### 3) BUILD

Preparation:
1. Rename [electron-builder-example.yml](electron-builder-example.yml) to `electron-builder.yml`
2. Specify [GitHub token](https://github.com/settings/tokens) in electron-builder.yml (scopes: public_repo)

And:

`npm run build`

- ### 4) TEST

install deb package:
`sudo dpkg -i dist/bitgesell-wallet_0.9.7_amd64.deb`

remove deb package:
`sudo dpkg --remove bitgesell-wallet`

install pacman package:
`sudo pacman -U bitgesell-wallet-0.9.7.pacman`

remove pacman package:
`sudo pacman -R bitgesell-wallet`

install snap package:
`sudo snap install --dangerous dist/bitgesell-wallet_0.9.7_amd64.snap`

remove snap package:
`sudo snap remove bitgesell-wallet`

- ### 5) DEPLOY

Preparation:
`snap login`

And:

`npm run deploy`

------------

## Contacts

Telegram: [@epexa](https://t.me/epexa)
