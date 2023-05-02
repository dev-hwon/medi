export default function getFileSizeMB(size) {
  let fileSize = Math.round((size / 1024 / 1024) * 100) / 100 + "MB";
  return fileSize;
}
