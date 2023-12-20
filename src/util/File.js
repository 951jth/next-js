export function urlDownload(url, filename) {
  /**
   * isCsv : csv 파일 여부
   * csv는 '\ufeff' 를 붙여야 한글이 깨지지 않음
   * */

  const link = document.createElement("a");

  link.href = url;
  link.style.display = "none";
  link.setAttribute("download", filename);

  document.body.appendChild(link);

  link.click();

  setTimeout(() => {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, 200);
}

export function fileDownload(data, filename, isCsv) {
  /**
   * isCsv : csv 파일 여부
   * csv는 '\ufeff' 를 붙여야 한글이 깨지지 않음
   * */
  const blobData = isCsv ? ["\ufeff", data] : [data];
  const blob = new Blob(blobData, { type: "application/octet-stream" });

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.style.display = "none";
  link.setAttribute("download", filename);

  document.body.appendChild(link);

  link.click();

  setTimeout(() => {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, 200);
}
