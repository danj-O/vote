const titleBox = document.getElementById("titlebox"); //title box
const title = document.getElementById("title");

const peopleBox = document.getElementById("peoplebox"); //ppl box
const people = document.getElementById("people");

const voteBox = document.getElementById("votebox"); // box for voting
const choiceInput = document.getElementById("choiceinput");

const continueBtn = document.getElementById("continueBtn");

const enter = () => {
    const x = title.value;
    titleBox.innerHTML = x;

    const q = people.value;  // q is how many ppl playing
    peopleBox.innerHTML = q + " People";
    console.log(q);

    const y = choiceInput.value;
    voteBox.innerHTML = y;

    continueBtn.remove();

}




const enter2 = () => {

}
const addChoice = () => {
    const newChoice = document.createElement("input");

    voteBox.appendChild(newChoice);

}



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

