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

let firstOption=0;
let secondOption=0;
let thirdOption=0;
let fourthOption=0;
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
        const votesArr = [];
        peopleCount--;
        votesLeft.innerHTML = `Votes Left : ${peopleCount}`;
        if (peopleCount >= 0){
            if (peopleCount == 0) {
                votesLeft.innerHTML = `<button id="resultsBtn" onclick= "resultsClick()">Click here to see results!</button>`;
            }
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
        } else if (peopleCount < 0){
            peopleCount = 0;
        }
        votesArr.push(firstOption, secondOption, thirdOption, fourthOption);
        let sortedVotesArr = [firstOption, secondOption, thirdOption, fourthOption];
        sortedVotesArr = sortedVotesArr.sort();//sorts lowest to highest
        console.log('votes ar', votesArr);
        console.log('sorted votes array',sortedVotesArr);
        const indexOfWinner = votesArr.length //gets last item in array
        const winVoteAmt = votesArr.pop(); // won with this many votes
        let winnerIndex;

        console.log('people count', peopleCount);
        // alert("NEXT! PASS THE PHONE!");  //SEND ALERT B/W VOTERS TURNS
    }
}
// TO DOOOO!!!!! --------> if the voteleft = 0, stop stuff from working, like the alert
const resultsClick = () => {
    // const winner = document.getElementById(`${winningNumberOfVotes}`);
    // const winnerest = winner.value;
    // console.log('w n of v last', winningNumberOfVotes);
    // console.log('winner', winner);
    peopleBox.remove();
    // votesLeft.innerHTML = `The winner is : ${winnerest}!!`;
}



// body.innerHTML = "<button data-value="1" id="something">button</button>";









// function removeDuplicate(arr) {        
//     var c;        
//     var len = arr.length;        
//     var result = [];        
//     var obj = {};                
//     for (c = 0; c<len; c++)  {            
//        obj[arr[c]] = 0;        
//     }  
//     for (c in obj) {            
//        result.push(c);        
//     }            
//     return result;      
//  }              
//  var myArr = [10, 20, 30, 40, 10, 40, 70, 80, 70, 90];      
//  document.write(removeDuplicate(myArr));  

// //loops through array asking if a number is higher than i, if it is, i = that number
// i = 0 //counter for highest
//  if i >