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
    .classList.add("show");  

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

const resultBox = document.querySelector(".result-box");

function predictRank(){

    resultBox.classList.add("show");

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

if(finalScore >= 400){
    rank = "5001 - 6000";
}

else if(finalScore >= 390){
    rank = "6001 - 7000";
}

else if(finalScore >= 380){
    rank = "7001 - 8000";
}

else if(finalScore >= 370){
    rank = "8001 - 10000";
}

else if(finalScore >= 360){
    rank = "10000 - 12000";
}

else if(finalScore >= 350){
    rank = "12000 - 14000";
}

else if(finalScore >= 340){
    rank = "14000 - 16000";
}

else if(finalScore >= 330){
    rank = "16000 - 18000";
}

else if(finalScore >= 320){
    rank = "18000 - 20000";
}

else if(finalScore >= 300){
    rank = "20000 - 25000";
}

else if(finalScore >= 290){
    rank = "25000 - 30000";
}

else if(finalScore >= 280){
    rank = "30000 - 35000";
}

else if(finalScore >= 270){
    rank = "35000 - 40000";
}

else if(finalScore >= 250){
    rank = "40000 - 45000";
}

else if(finalScore >= 240){
    rank = "45000 - 50000";
}

else if(finalScore >= 230){
    rank = "50000 - 60000";
}

else{
    rank = "Above 60000";
}

 document.getElementById("rank-range").innerText = rank;
    
}







