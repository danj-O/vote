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
let voteChosen; // option button pressed's id

let firstOption='';
let secondOption='';
let thirdOption='';
let fourthOption= '';
let fifthOption= '';

let winVoteAmt = 0;
let votesArr = [];
let votesArrLen;
// let winningNumberOfVotes;

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
        const inputVal = document.getElementById(`choiceinput${i}`);
        // choiceButton.data-value = 
        choiceButton.innerHTML = inputVal.value;
        choiceButton.value = inputVal.value;
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

//click the option buttons
const voteClick = (e) => {
    if (e.target.tagName == 'BUTTON') {
        voteChosen = e.target.id;
        // const votesArr = [0, 0, 0, 0];
        peopleCount--;
        votesLeft.innerHTML = `Votes Left : ${peopleCount}`;
        if (peopleCount >= 0){
                //adding votes to their given counters
            if (voteChosen.includes(1)){
                firstOption++;
            } else if (voteChosen.includes(2)){
                secondOption++;  
            } else if (voteChosen.includes(3)){
                thirdOption++;  
            } else if (voteChosen.includes(4)){
                fourthOption++;  
            } else if (voteChosen.includes(5)){
                fifthOption++;  
            } 
        }
        if (peopleCount == 0){
            votesArr.push(firstOption, secondOption, thirdOption, fourthOption, fifthOption);
            votesLeft.innerHTML = `<button id="resultsBtn" onclick= "findNumInArr()">Click here to see results!</button>`;
            console.log('votes ar', votesArr);
        } else if (peopleCount < 0){
            peopleCount = null;
        }          
        console.log('people count', peopleCount);
        // alert("NEXT! PASS THE PHONE!");  //SEND ALERT B/W VOTERS TURNS
    }
}



// TO DOOOO!!!!! --------> if the voteleft = 0, stop stuff from working, like the alert
const findNumInArr = () => {
    const votesArrLen = votesArr.length;
    const votesArrCopy = votesArr.slice(0);
    console.log('before',votesArr);
    const sortedVotesArr = votesArr.sort();
    const winVoteAmt = sortedVotesArr.pop();
    const winVoteAmt2 = sortedVotesArr.pop();
    // const winVoteAmt = votesArr.slice(-1);
    console.log('yep');
    console.log('copy',votesArrCopy);
    console.log('length',votesArrLen);
    console.log('sorted array', sortedVotesArr);
    console.log('winning vote has', winVoteAmt);
    for (i=1; i < votesArrLen;i++){
        if (votesArrCopy[i] == winVoteAmt){
            const woo = document.getElementById(`choicebutton${i+1}`);
            console.log(woo);
            const winningOption = woo.value;
            if (votesArrCopy[i] !== winVoteAmt2){
                console.log('win op 1',winningOption);
                peopleBox.innerHTML = `The winner is ${winningOption}`;
                votesLeft.remove();
            } else if (votesArrCopy[i] == winVoteAmt2){
            const woo2 = document.getElementById(`choicebutton${i+1}`);
            const winningOption2 = woo2.value;
            console.log('win op 2',winningOption2);
            peopleBox.innerHTML = `We have a tie!`;
            }
        }
    }
}
