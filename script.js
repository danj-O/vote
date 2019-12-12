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

let firstOption=0;
let secondOption=0;
let thirdOption=0;
let fourthOption=0;
let winningNumberOfVotes=0;

//click the option buttons
const voteClick = (e) => {
    if (e.target.tagName == 'BUTTON') {
        voteChosen = e.target.id;
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
        } else {        
                    //getting the winner!!!!
            const finalArr = [firstOption, secondOption, thirdOption, fourthOption];
            // if (finalArr[i]) {

            // }
            winningNumberOfVotes = finalArr.indexOf(Math.max(firstOption, secondOption, thirdOption, fourthOption));
            votesLeft.innerHTML = `<button id="resultsBtn" onclick= "resultsClick()">Click here to see results!</button>`;
        } 
        peopleCount--;
        // alert("NEXT! PASS THE PHONE!");  //SEND ALERT B/W VOTERS TURNS
    }
}
// TO DOOOO!!!!! --------> if the voteleft = 0, stop stuff from working, like the alert
const resultsClick = () => {
    const winner = document.getElementById(`${voteChosen}`);
    const winnerest = winner.value;
    peopleBox.remove();
    votesLeft.innerHTML = `The winner is : ${winnerest}!!`;
}







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