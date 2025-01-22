import { useState } from "react";
import "./App.css";

// Grid - 3x3 - #1-9

// 	3 rows of 3 buttons - default of null
// Each button will have: Default state of Null
// Returning the button nine times
// Formatting these nine into 3x3 rows
// Each square/button needs value of 1-9
// Assign a state variable to each button so when clicked, change to X (for now)
// Assign each button an index value 0-8

function Tile({ num, tileClick }) {
  return <button className="tile" onClick={tileClick}>{num}</button>;
}

export default function Grid() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [nextMove, setNextMove] = useState(true);
  function handleClick(i){
    if(tiles [i] )
    {
        return 
    }
       

    console.log("working")
    const update = tiles.slice()
    if(nextMove) {
        update[i] = "X"
    } 
    else{
        update[i] = "O"
    }
    setTiles(update)
    setNextMove(!nextMove)
// when user clicks a button it will change from null to X
// create a variable which will insert the X into the relevant tile 
//use variable in the set tiles to re render with new value 
  }
  return (
    <>
      <div className="grid-row">
        <Tile num={tiles[0]} tileClick= {() => handleClick(0)} />
        <Tile num={tiles[1]} tileClick ={() => handleClick(1)}/>
        <Tile num={tiles[2]} tileClick ={() => handleClick(2)}/>
      </div>
      <div className="grid-row">
        <Tile num={tiles[3]} tileClick ={() => handleClick(3)}/>
        <Tile num={tiles[4]} tileClick ={() => handleClick(4)}/>
        <Tile num={tiles[5]} tileClick ={() => handleClick(5)}/>
      </div>
      <div className="grid-row">
        <Tile num={tiles[6]} tileClick ={() => handleClick(6)}/>
        <Tile num={tiles[7]} tileClick ={() => handleClick(7)}/>
        <Tile num={tiles[8]} tileClick ={() => handleClick(8)}/>
      </div>
    </>
  );
}

// 	When clicked, changes to either X or O, alternating based on previous button’s state
// If statement, tracking the current player's Token (X or O) and changing the state accordingly

// Click only works on cells/buttons that are currently null

// Null / X / O
// Default Null

// Draw the grid
// Choose who goes first - Assign X
// Change selected grid ref to X - P1
// Change selected grid ref to O - P2
// Until win

// Winning conditions
// 123
// 456
// 789
// 147
// 258
// 369
// 159
// 357
