// utils/downloadUtils.js

export const downloadFile = (fileName) => {
  fetch(fileName)
    .then((response) => response.blob())
    .then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = fileName;
      alink.click();
    })
    .catch((error) => console.error("File download failed:", error));
};
