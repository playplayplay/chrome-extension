import $ from 'jquery';

const CSS_CLASS_BLOB_WRAPPER = 'blob-wrapper';
const CSS_CLASS_BLOB = 'blob-code-inner';

function getBlobType(element) {
  const type = element.className.match(/type-([_a-zA-Z]+[_a-zA-Z0-9-])/);

  if (!type || !type[1]) {
    return null;
  }

  return type[1];
}

function buildSourceItem(el)  {
  const text = $(el).text();
  return {
    el,
    text,
  };
}

function findLines(blobEl) {
  const type = getBlobType(blobEl);
  if (!type) {
    return null;
  }

  const linesEl = blobEl.getElementsByClassName(CSS_CLASS_BLOB);
  const lines = Array.prototype.map.call(linesEl, buildSourceItem);

  return {
    lines,
    type,
  };
}

export default function() {
  const blobs = document.getElementsByClassName(CSS_CLASS_BLOB_WRAPPER);

  return Array.prototype.map.call(blobs, findLines)
    .filter(obj => obj);
}
