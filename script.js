// DEFAULT BOARD
let boardType = "cbse";



// CBSE BUTTON
document.getElementById("cbseBtn")

.onclick = function(){

    boardType = "cbse";

    // ACTIVE DESIGN
    document.getElementById("cbseBtn")
    .classList.add("active");

    document.getElementById("stateBtn")
    .classList.remove("active");


    document.querySelector(".result-box")

    .style.animation = "fadeIn 0.6s ease forwards";



};




// STATE BOARD BUTTON
document.getElementById("stateBtn")

.onclick = function(){

    boardType = "state";

    // ACTIVE DESIGN
    document.getElementById("stateBtn")
    .classList.add("active");

    document.getElementById("cbseBtn")
    .classList.remove("active");

};




function predictRank(){

    let maths =
    Number(document.getElementById("maths").value);

    let physics =
    Number(document.getElementById("physics").value);

    let chemistry =
    Number(document.getElementById("chemistry").value);

    let keam =
    Number(document.getElementById("keam").value);



    // EMPTY CHECK

    if(
        maths === 0 ||
        physics === 0 ||
        chemistry === 0 ||
        keam === 0
    ){

        document.getElementById("error-message").innerHTML =
        "Please Enter All Inputs";

        return;
    }



    // CLEAR ERROR

    document.getElementById("error-message").innerHTML =
    "";



    // STATE BOARD CONVERSION

    if(boardType === "state"){

        maths = (maths / 120) * 100;

        physics = (physics / 120) * 100;

        chemistry = (chemistry / 120) * 100;

    }



    // 5 : 3 : 2 WEIGHTAGE

    let weightedPercentage =

    (
        (maths * 5) +
        (physics * 3) +
        (chemistry * 2)

    ) / 10;



    // BOARD SCORE OUT OF 300

    let boardScore =

    (weightedPercentage / 100) * 300;

    // FINAL SCORE

    let finalScore = boardScore + keam;



    // SHOW RESULT

    document.getElementById("final-score").innerHTML =

    finalScore.toFixed(2);

    document.getElementById("weighted-score").innerHTML =

    boardScore.toFixed(2);

    let rank = "";



if(finalScore >= 585){

    rank = "1 - 5";

}

else if(finalScore >= 580){

    rank = "6 - 10";

}

else if(finalScore >= 575){

    rank = "11 - 25";

}

else if(finalScore >= 565){

    rank = "26 - 50";

}

else if(finalScore >= 550){

    rank = "51 - 100";

}

else if(finalScore >= 540){

    rank = "101 - 200";

}

else if(finalScore >= 520){

    rank = "201 - 500";

}

else if(finalScore >= 500){

    rank = "501 - 1000";

}

else if(finalScore >= 475){

    rank = "1001 - 2000";

}

else if(finalScore >= 450){

    rank = "2001 - 3000";

}

else if(finalScore >= 430){

    rank = "3001 - 4000";

}

else if(finalScore >= 410){

    rank = "4001 - 5000";

}

else{

    rank = "Above 5000";

}
  
    document.getElementById("rank-range").innerHTML = rank;
}