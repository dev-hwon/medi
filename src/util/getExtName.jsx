export default function getExtName(filename) {
  let fileLength = filename.length;
  let dotPosition = filename.lastIndexOf(".");
  let fileExt = filename.substring(dotPosition + 1, fileLength).toLowerCase();
  return fileExt;
}
