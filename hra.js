let tah = 'circle';

let hrac = document.querySelector('.hra_ikona');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (event) => {
    if (tah === 'circle') {
      event.target.classList.add('board__field--circle');
      hrac.src = `img/cross.svg`;
      hrac.alt = `hraje křížek`;
      tah = `cross`;
      event.target.disabled = true;
      vyhra(event.target);
    } else if (tah === 'cross') {
      event.target.classList.add('board__field--cross');
      hrac.src = `img/circle.svg`;
      hrac.alt = `hraje kolečko`;
      tah = 'circle';
      event.target.disabled = true;
      vyhra(event.target);
    }
  });
}
