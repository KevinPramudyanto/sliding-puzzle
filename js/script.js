/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let row = 4;
let col = 4;
let light = false;
let moves = 0;
let timerInterval;
let cells = [];

/*------------------------ Cached Element References ------------------------*/
const mainMenuContainerEl = document.querySelector(".mainMenuContainer");
const playBtn = document.querySelector("#playBtn");
const settingBtn = document.querySelector("#settingBtn");
const instructionBtn = document.querySelector("#instructionBtn");

const loadingContainerEl = document.querySelector(".loadingContainer");
const loadingNumEl = document.querySelector("#loadingNum");
const loadingBarProgressEl = document.querySelector(".loadingBarProgress");

const gameContainerEl = document.querySelector(".gameContainer");
const movesEl = document.querySelector("#moves");
const timeEl = document.querySelector("#time");
const confirmResetBtn = document.querySelector("#confirmResetBtn");
const instruction2Btn = document.querySelector("#instruction2Btn");
const board = document.querySelector(".board");

const cnfrmResetContainerEl = document.querySelector(".cnfrmResetContainer");
const resetBtn = document.querySelector("#resetBtn");

const winContainerEl = document.querySelector(".winContainer");
const totalMovesEl = document.querySelector("#totalMoves");
const totalTimeEl = document.querySelector("#totalTime");
const reset2Btn = document.querySelector("#reset2Btn");

const settingContainerEl = document.querySelector(".settingContainer");
const rowButtons = document.querySelector(".rowButtons");
const row3Btn = document.querySelector("#row3Btn");
const row4Btn = document.querySelector("#row4Btn");
const row5Btn = document.querySelector("#row5Btn");
const row6Btn = document.querySelector("#row6Btn");
const colButtons = document.querySelector(".colButtons");
const col3Btn = document.querySelector("#col3Btn");
const col4Btn = document.querySelector("#col4Btn");
const col5Btn = document.querySelector("#col5Btn");
const col6Btn = document.querySelector("#col6Btn");
const lightButtons = document.querySelector(".lightButtons");
const okBtn = document.querySelector("#okBtn");
const defaultBtn = document.querySelector("#defaultBtn");

const instructionContainerEl = document.querySelector(".instructionContainer");

/*-------------------------------- Functions --------------------------------*/
const move = (r, c) => {
  if (c + 1 < col && cells[r][c + 1].innerText === "") {
    cells[r][c + 1].innerText = cells[r][c].innerText;
    cells[r][c].innerText = "";
    cells[r][c + 1].classList.toggle("full");
    cells[r][c + 1].classList.toggle("moveRight");
    setTimeout(() => cells[r][c + 1].classList.toggle("moveRight"), 500);
    cells[r][c].classList.toggle("full");
    moves++;
    movesEl.innerText = moves;
  } else if (c - 1 >= 0 && cells[r][c - 1].innerText === "") {
    cells[r][c - 1].innerText = cells[r][c].innerText;
    cells[r][c].innerText = "";
    cells[r][c - 1].classList.toggle("full");
    cells[r][c - 1].classList.toggle("moveLeft");
    setTimeout(() => cells[r][c - 1].classList.toggle("moveLeft"), 500);
    cells[r][c].classList.toggle("full");
    moves++;
    movesEl.innerText = moves;
  } else if (r + 1 < row && cells[r + 1][c].innerText === "") {
    cells[r + 1][c].innerText = cells[r][c].innerText;
    cells[r][c].innerText = "";
    cells[r + 1][c].classList.toggle("full");
    cells[r + 1][c].classList.toggle("moveDown");
    setTimeout(() => cells[r + 1][c].classList.toggle("moveDown"), 500);
    cells[r][c].classList.toggle("full");
    moves++;
    movesEl.innerText = moves;
  } else if (r - 1 >= 0 && cells[r - 1][c].innerText === "") {
    cells[r - 1][c].innerText = cells[r][c].innerText;
    cells[r][c].innerText = "";
    cells[r - 1][c].classList.toggle("full");
    cells[r - 1][c].classList.toggle("moveUp");
    setTimeout(() => cells[r - 1][c].classList.toggle("moveUp"), 500);
    cells[r][c].classList.toggle("full");
    moves++;
    movesEl.innerText = moves;
  }
};

const checkWin = () => {
  let num = 0;
  let win = true;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      num++;
      if (!(i === row - 1 && j === col - 1)) {
        win = win && cells[i][j].innerText == num;
      }
    }
  }
  if (win) {
    totalMovesEl.innerText = movesEl.innerText;
    totalTimeEl.innerText = timeEl.innerText;
    winContainerEl.style.display = "flex";
  }
};

const startLoading = () => {
  let percentage = 0;
  const loadingInterval = setInterval(() => {
    loadingNumEl.innerText = percentage + "%";
    loadingBarProgressEl.style.width = percentage + "%";
    percentage++;
    if (percentage > 100) {
      clearInterval(loadingInterval);
    }
  }, 20);
};

const createCell = () => {
  board.style.gridTemplateRows = `repeat(${row}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;

  let num = 0;
  for (let i = 0; i < row; i++) {
    cells.push([]);
    for (let j = 0; j < col; j++) {
      const divEl = document.createElement("div");
      divEl.classList.add("cell");
      divEl.classList.add("full");
      divEl.id = `cell${i}${j}`;
      board.appendChild(divEl);

      cells[i].push(document.querySelector(`#cell${i}${j}`));
      num++;
      cells[i][j].innerText = num;
    }
  }

  cells[row - 1][col - 1].classList.remove("full");
  cells[row - 1][col - 1].innerText = "";
};

const shuffle = () => {
  for (let count = 0; count < row * row * col * col; count++) {
    const randRow = Math.floor(Math.random() * row);
    const randCol = Math.floor(Math.random() * col);
    move(randRow, randCol);
  }
  moves = 0;
  movesEl.innerText = moves;
};

const startTimer = () => {
  let time = 0;
  timerInterval = setInterval(() => {
    time++;
    const seconds = Math.floor(time % 60);
    const ss = seconds > 9 ? seconds : "0" + seconds;
    const minutes = Math.floor((time % 3600) / 60);
    const mm = minutes > 9 ? minutes : "0" + minutes;
    const hours = Math.floor(time / 3600);
    const hh = hours > 9 ? hours : "0" + hours;
    timeEl.innerText = `${hh}:${mm}:${ss}`;
  }, 1000);
};

const resetStat = () => {
  moves = 0;
  movesEl.innerText = moves;
  clearInterval(timerInterval);
  timeEl.innerText = "00:00:00";
};

const removeCell = () => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      cells[i][j].remove();
    }
  }
  cells = [];
};

/*------------------------------- Handle Click ------------------------------*/
const handlePlayBtnClick = () => {
  mainMenuContainerEl.style.display = "none";
  loadingContainerEl.style.display = "flex";
  gameContainerEl.style.display = "none";
  startLoading();
  createCell();
  shuffle();
  setTimeout(() => {
    mainMenuContainerEl.style.display = "none";
    loadingContainerEl.style.display = "none";
    gameContainerEl.style.display = "flex";
    startTimer();
  }, 2500);
};

const handleBoardClick = (e) => {
  const currRow = parseInt(e.target.id.charAt(4));
  const currCol = parseInt(e.target.id.charAt(5));
  move(currRow, currCol);
  checkWin();
};

const handleResetBtnClick = () => {
  mainMenuContainerEl.style.display = "flex";
  loadingContainerEl.style.display = "none";
  gameContainerEl.style.display = "none";
  winContainerEl.style.display = "none";
  resetStat();
  removeCell();
};

/*----------------------------- Event Listeners -----------------------------*/
playBtn.addEventListener("click", handlePlayBtnClick);

board.addEventListener("click", handleBoardClick);

confirmResetBtn.addEventListener("click", () => {
  cnfrmResetContainerEl.style.display = "flex";
});
cnfrmResetContainerEl.addEventListener("click", () => {
  cnfrmResetContainerEl.style.display = "none";
});

resetBtn.addEventListener("click", handleResetBtnClick);
reset2Btn.addEventListener("click", handleResetBtnClick);

instructionBtn.addEventListener("click", () => {
  instructionContainerEl.style.display = "flex";
});
instruction2Btn.addEventListener("click", () => {
  instructionContainerEl.style.display = "flex";
});
instructionContainerEl.addEventListener("click", () => {
  instructionContainerEl.style.display = "none";
});
