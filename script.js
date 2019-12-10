const titleBox = document.getElementById("titlebox"); //top box for title
const title = document.getElementById("title");

const answerBox = document.getElementById("answerbox"); //bottom box for answer stuff
const howMany = document.getElementById("howmany");


const enter = () => {
    const x = title.value;
    titleBox.innerHTML = x;
    const q = howMany.value;
    answerBox.removeChild(howMany);
    answerBox.removeChild(continueBtn);
    console.log(q);
    for (let i = 0; i < q; i++){
        console.log("yep");
        const newInput = document.createElement("input");
        answerBox.appendChild(newInput);
    }

}


// document.createElement("answerbox").innerHTML = `
// <input type="text" class="vote_choices" placeholder="option">`;


//     document.getElementById("answerbox").innerHTML = `
//         <input type="text" class="vote_choices" placeholder="option 1">
//         <input type="text" class="vote_choices" placeholder="option 1">
//         <input type="text" class="vote_choices" placeholder="option 1">
//         <input type="text" class="vote_choices" placeholder="option 1">
//     `
// }

