const refs = {
  body: document.body,
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onSwichThem = e => {
  e.target.disabled = true;

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const offSwichThem = e => {
  refs.start.disabled = false;

  clearInterval(intervalId);
};

refs.start.addEventListener('click', onSwichThem);
refs.stop.addEventListener('click', offSwichThem);
