# Electron based youtube to mp3 converter

This is a simple, minimalistic electron desktop application for downloading youtube videos and converting them to mp3.

## Setup

- download the repository

```bash
git clone https://github.com/oliverilm/electron-youtube-downloader.git
cd electron-youtube-downloader
```

- install dependencies and run

```bash
npm i
npm start
```

- deployment

```bash
# for windows
yarn electron-builder --windows

# for linux and macOS
yarn make
```

## Application

Application consists of a single view, that presents an input and a button for the downloading process

<image src="http://i.imgur.com/x2PBowN.png" alt="not available"></image>

Inserting an invalid URL presents you with an error

<image src="http://i.imgur.com/E5tAo0d.png" alt="not available"></image>
