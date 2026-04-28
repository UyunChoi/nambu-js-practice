const container = document.getElementById('container');

function setDirection(value) {
  container.style.flexDirection = value;
}

function setJustify(value) {
  container.style.justifyContent = value;
}

function setAlign(value) {
  container.style.alignItems = value;
}

function toggleWrap() {
  container.style.flexWrap =
    container.style.flexWrap === 'wrap' ? 'nowrap' : 'wrap';
}
