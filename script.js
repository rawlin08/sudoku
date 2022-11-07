// selectors for DOM

const container = document.querySelector('.container')
const difficultyBttns = document.querySelectorAll('[data-difficulty');
const newGameBttn = document.querySelector('.newGame');
const restartGameBttn = document.querySelector('.restartGame');
const diffDisplay = document.querySelector('.difficutlyDisplay');

// event listeners

difficultyBttns.forEach(button => {
    button.addEventListener('click', () => {
        setDifficulty(button.textContent);
    })
});

restartGameBttn.addEventListener('click', () => {
    restartGame();
})

// default settings

let outerSize = 3;
let innerSize = 9;

// functions

function buildGrid(outerSize, innerSize) {
    for (let i = 0; i < outerSize * outerSize; i++) {
        container.style.gridTemplateColumns = `repeat(${outerSize}, 1fr)`;
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('outerGrid')
        container.appendChild(outerDiv);
    };

    const outerGrid = document.querySelector('.outerGrid');

    for (let i = 0; i < innerSize * innerSize; i++) {
        outerGrid.style.gridTemplateColumns = `repeat(${innerSize}, 1fr)`;
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('innerGrid')
        outerGrid.appendChild(innerDiv);
        console.log('what');
    }
}

function setDifficulty(difficulty) {
    diffDisplay.textContent = difficulty;
}

function checkSlot() {

}

function restartGame() {
    console.log('restarted');
}

function gameOver() {

}

buildGrid(outerSize, innerSize);