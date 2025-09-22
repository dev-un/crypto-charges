export const downloadBlob = (blob: Blob, name: string) => {
  const blobHref = window.URL.createObjectURL(blob);
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', blobHref);
  downloadAnchorNode.setAttribute('download', name);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

export const downloadJson = (
  // eslint-disable-next-line
  json: Record<string, any>,
  name = 'exported_json',
) => {
  const blob = new Blob([JSON.stringify(json)], {
    type: 'text/json;charset=utf-8',
  });
  downloadBlob(blob, `${name}.json`);
};

export const downloadCsv = (data: string, name = 'exported_csv') => {
  const blob = new Blob([data], {
    type: 'text/csv;charset=utf-8;',
  });
  downloadBlob(blob, `${name}.csv`);
};