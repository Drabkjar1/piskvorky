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

// 5. uloha
const boardSize = 10;

const getPosition = (field) => {
  for (let i = 0; i < buttons.length; i++) {
    if (field === buttons[i]) {
      return {
        row: Math.floor(i / boardSize),
        column: i % boardSize,
      };
    }
  }
};

const getField = (row, column) => buttons[row * boardSize + column];

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;
  // Doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= 5) {
    return true;
  }

  let inColumn = 1;
  // Nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= 5) {
    return true;
  }

  return false;
};

const vyhra = (field) => {
  if (isWinningMove(field) === true) {
    if (getSymbol(field) === 'circle') {
      alert('Kolečko vyhrává');
    } else if (getSymbol(field) === 'cross') {
      alert('Křížek vyhrává');
    }
  }
};
