const { dialog } = require("electron").remote;
const ytdl = require("ytdl-core");
const fs = require("fs");

const url = document.getElementById("url");
const dwl = document.getElementById("download");
const danger = document.getElementById("danger");
const dangerButton = document.getElementById("danger-button");
const tt = document.getElementById("title");
const homeDir = require('os').homedir();
const desktopDir = `${homeDir}/Desktop`;
const progress = document.getElementById("progress-bar")


progress.hidden = true
danger.hidden = true

dangerButton.addEventListener("click", () => {
  danger.hidden = true;
})


url.addEventListener("input",  async () => {
  progress.hidden = false;
  try {
    await ytdl.getInfo(url.value, function (err, info) {
      tt.innerText = info.title
      danger.hidden = true;
    });
  } catch (e) {
    tt.innerText = ""
    danger.hidden = false;

  }
  progress.hidden = true
})

dwl.addEventListener("click", async () => {
  progress.hidden = false

  const url = document.getElementById("url");
  danger.hidden = url.value.length !== 0;
  try {
    await ytdl.getInfo(url.value, async function (err, info) {

      const {filePath} = await dialog.showSaveDialog({buttonLabel: "Save", defaultPath: `${desktopDir}/${info.title.replace(" ", "-")}`})
      ytdl(url.value, {filter: 'audioonly'}).pipe(fs.createWriteStream(`${filePath}.mp3`));

      url.value = ""
    });
    progress.hidden = true
  } catch (e) {
    danger.hidden = false;
  }
  progress.hidden = true
});
