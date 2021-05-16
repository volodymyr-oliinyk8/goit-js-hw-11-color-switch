const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let startIntervalId = null;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', startChangeThemes);
refs.stopBtn.addEventListener('click', stopChangeThemes);

function startChangeThemes() {
  startIntervalId = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(colors.indexOf('#FFFFFF'), colors.indexOf('#795548'));
    const randomColor = colors[randomIndex];
    refs.body.setAttribute('style', `background: ${randomColor}`)
  }, 1000);
  refs.startBtn.setAttribute('disabled', 'disabled');
}


function stopChangeThemes() {
  clearInterval(startIntervalId);
  refs.startBtn.removeAttribute('disabled', 'disabled');
}

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

 