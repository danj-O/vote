const titleBox = document.getElementById("titlebox"); //title box
const title = document.getElementById("title");

const peopleBox = document.getElementById("peoplebox"); //ppl box
const people = document.getElementById("people");

const inputBox = document.getElementById("inputbox"); // box for voting
const voteBox = document.getElementById("votebox");

const addChoiceBox = document.getElementById("addchoicebox"); //add choice button
const continueBtn = document.getElementById("continueBtn");

let choiceInput; //newly created inputs for vote options
let choiceButton; //newly created buttons
let addCount = 0;
let peopleCount; //amt of vote options chosen

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
    peopleBox.innerHTML = peopleCount + " Debaters";

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

    //next screen with 
    // const voteCount = document.createElement("div");
    // titleBox.appendChild(votecount);
    const voteCount = document.createTextNode(`Votes Left : ${peopleCount}`)
    titleBox.appendChild(voteCount);
}


const enter2 = () => {
    console.log("yep");
}


// create a button and put the input value on it 

// for (let i = 0; i < q; i++){
//     console.log("yep");
//     const newInput = document.createElement("input");
//     newInput.placeholder = "write a choice here";
//     answerBox.appendChild(newInput);
// }

// document.createElement("answerbox").innerHTML = `
// <input type="text" class="vote_choices" placeholder="option">`;


//     document.getElementById("answerbox").innerHTML = `
//         <input type="text" class="vote_choices" placeholder="option 1">
//         <input type="text" class="vote_choices" placeholder="option 1">
//         <input type="text" class="vote_choices" placeholder="option 1">
//         <input type="text" class="vote_choices" placeholder="option 1">
//     `
// }

