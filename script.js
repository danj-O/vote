const titleBox = document.getElementById("titlebox"); //title box
const title = document.getElementById("title");

const peopleBox = document.getElementById("peoplebox"); //ppl box
const people = document.getElementById("people");

const voteBox = document.getElementById("votebox"); // box for voting

const addChoiceBox = document.getElementById("addchoicebox"); //add choice button
const continueBtn = document.getElementById("continueBtn");

let choiceInput; //newly created inputs for vote options
let choiceButton; //newly created buttons
let addCount = 0;

//adds inputs for vote choices
const addChoice = () => {
    addCount++;
    choiceInput = document.createElement("input");
    choiceInput.classname = "choices";
    choiceInput.id = "choiceinput"+addCount;
    choiceInput.placeholder = "enter an input";
    voteBox.appendChild(choiceInput);
}

// the continue button function
const enter = () => {
    const x = title.value;
    titleBox.innerHTML = x;

    const q = people.value;  // q is how many ppl playing
    peopleBox.innerHTML = q + " Debaters";

    for (let i = 1; i <= addCount; i++) {
        const choiceButton = document.createElement('button');
        const inputLoopVal = 'choiceInput' + i;
        const inputVal = document.getElementById(`inputLoopVal${i}`)
        console.log(choiceInput.value);
        choiceButton.innerHTML = choiceInput.value;
        choiceButton.id = `choicebutton`+ i;
        voteBox.appendChild(choiceButton);

    }
    addChoiceBox.remove();
    continueBtn.remove();
}


const enter2 = () => {

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

