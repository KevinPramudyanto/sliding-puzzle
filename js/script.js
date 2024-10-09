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
