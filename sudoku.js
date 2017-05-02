"use strict"

const fs = require('fs')
const sudokus = require('sudokus');
let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

  function create(board_string){
    let big_board = [];
    let column = [];
    for (let j = 0; j < 9; j++ ){
      column = [];
      for (let i = 0; i < 9; i++){
        column[i] = parseInt(board_string[i]);
      }
      big_board.push(column);
      board_string = board_string.slice(9)
    }
    return big_board;
  }

const solution = sudokus.solve(create(board_string));
console.log("Unsolved");
console.log(create(board_string));
console.log("Solved");
console.log(solution);
