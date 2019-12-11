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
    const peopleCount = people.value;
    peopleBox.innerHTML = "Debaters " + peopleCount;

    //takes input and puts on buttons
    for (let i = 1; i <= addCount; i++) {
        const choiceButton = document.createElement('button');
        // const inputLoopVal = 'choiceInput' + i;
        const inputVal = document.getElementById(`choiceinput${i}`)
        // console.log(inputVal);
        choiceButton.innerHTML = inputVal.value;
        choiceButton.id = `choicebutton`+ i;
        voteBox.appendChild(choiceButton);
    }
    inputBox.remove();
    addChoiceBox.remove();
    continueBtn.remove();

    // Votes left 
    // voteCountBox = document.createElement("div");
    // titleBox.appendChild(voteCountBox);
    voteCount = document.createTextNode(`Votes Left : ${peopleCount}`)
    votesLeft.appendChild(voteCount);
}



const voteClick = () => {
    console.log("yep");
}
