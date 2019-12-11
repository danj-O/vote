const titleBox = document.getElementById("titlebox"); //title box
const title = document.getElementById("title");

const peopleBox = document.getElementById("peoplebox"); //ppl box
const people = document.getElementById("people");

const inputBox = document.getElementById("inputbox"); // box for voting
const voteBox = document.getElementById("votebox");

const addChoiceBox = document.getElementById("addchoicebox"); //add choice button
const continueBtn = document.getElementById("continueBtn");

const votesLeft = document.getElementById("votesleft");

let choiceInput; //newly created inputs for vote options
let choiceButton; //newly created buttons
let addCount = 0;
let peopleCount; //amt of vote options chosen
let voteCount;
let voteChosen; //maybe dont need

//adds inputs for vote choices
const addChoice = () => {
    addCount++;
    choiceInput = document.createElement("input");
    choiceInput.classname = "choices";
    choiceInput.id = "choiceinput"+addCount;
    choiceInput.placeholder = "enter an input";
    inputBox.appendChild(choiceInput);
}

// the continue button function
const enter = () => {
    const x = title.value;
    titleBox.innerHTML = x;

    //takes amt of ppl and makes it viewable
    peopleCount = people.value;
    peopleBox.innerHTML = "Debaters " + peopleCount;

    //takes input and puts on buttons
    for (let i = 1; i <= addCount; i++) {
        const choiceButton = document.createElement('button');
        // const inputLoopVal = 'choiceInput' + i;
        const inputVal = document.getElementById(`choiceinput${i}`)
        // console.log(inputVal);
        choiceButton.innerHTML = inputVal.value;
        choiceButton.id = `choicebutton`+ i;
        choiceButton.onclick = voteClick;
        voteBox.appendChild(choiceButton);
    }
    inputBox.remove();
    addChoiceBox.remove();
    continueBtn.remove();

    // Votes left counter init
    voteCount = document.createTextNode(`Votes Left : ${peopleCount}`)
    votesLeft.appendChild(voteCount);
}

let firstOption=0;
let secondOption=0;
let thirdOption=0;
let fourthOption=0;

//click the option buttons
const voteClick = (e) => {
    if (e.target.tagName == 'BUTTON') {
        // debugger;
        voteChosen = e.target.id;
        // peopleCount--;
        if (peopleCount === 0){
            console.log(peopleCount);
            votesLeft.innerHTML = `The votes are in! <button>Click to see results!</button`;
        }
        if (peopleCount > 1){
            votesLeft.innerHTML = `Votes Left : ${peopleCount - 1}`;
                //adding votes to their given counters
            if (voteChosen.includes(1)){
                firstOption++;  
            } else if (voteChosen.includes(2)){
                secondOption++;  
            } else if (voteChosen.includes(3)){
                thirdOption++;  
            } else if (voteChosen.includes(4)){
                fourthOption++;  
            } 
            // console.log(finalArr);
        } else {        
                    //getting the winner!!!!
            const finalArr = [firstOption, secondOption, thirdOption, fourthOption]
            console.log(finalArr);
            const winningNumberOfVotes = finalArr.indexOf(Math.max(firstOption, secondOption, thirdOption, fourthOption));
            votesLeft.innerHTML = `Winner ${winningNumberOfVotes + 1}`;
        } 
        peopleCount--;
        // console.log(peopleCount);
        console.log(firstOption, secondOption, thirdOption, fourthOption);
        // alert("NEXT! PASS THE PHONE!");  //SEND ALERT B/W VOTERS TURNS
    }
}
// TO DOOOO!!!!! --------> if the voteleft = 0, stop stuff from working, like the alert