import React, { useState } from "react";

export default function Body() {
  let randoms = Math.round(Math.random() * 5) + 1;
  let Started = false;
  const handleUpClick = () => {
    randOne(Math.round(Math.random() * 5) + 1);
    randTwo(Math.round(Math.random() * 5) + 1);
    isStarted(true);
  };

  const [randO, randOne] = useState(randoms);
  const [randT, randTwo] = useState(randoms);
  const [is, isStarted] = useState(Started);

  const handleOnChange = (event) => {
    randO(event.target.value);
    randT(event.target.value);
  };
  let winner ="";
  if(randO>randT){
    winner = "Player One is the Winner!!!";
  }else if(randT>randO){
    winner = "Player Two is the Winner!!!";
  }else{
    winner = "Match is Draw, Please play again!"
  }
  let playButton = "";
  let visibilityOfDice = "hidden";
  if(!is){
    playButton = "Click Here to Start the Game";
    console.log("not started");
    winner = "Click on The bellow button to Start the Game";
    
  }else{
    playButton = "Next turn for Dice role";
    console.log(" started");
    visibilityOfDice = "visible";
  }

  return (
    <>
      <div>
        <h1 className="container text-warning " style={{ marginTop: "5rem",textAlign:"center" }}>
          {winner}
        </h1>
      </div>
      <div className="container text-center" style={{ marginTop: "10rem" }}>
        <div className="row">
          <div className="col diceOne" style={{ marginBottom: "2rem" ,visibility:`${visibilityOfDice}`}}>
            <img
              src={require(`../images/dice${randO}.png`)}
              alt="Player_1_dice"
              onChange={handleOnChange}
            />
          </div>
          <div className="col diceTwo" style={{visibility:`${visibilityOfDice}`}}>
            <img
              src={require(`../images/dice${randT}.png`)}
              alt="Player_2_dice"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="justify-content-center">
          <button className="btn btn-warning my-5 btn-lg" onClick={handleUpClick} onChange={handleOnChange}>
              {playButton}
          </button>
        </div>
      </div>
    </>
  );
}
