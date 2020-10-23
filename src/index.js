import './styles.css';
import createBomb from './js/putBombs.js';
import fieldData from './js/pointsDataObject.js';
import putValueOfBomb from './js/putValue.js';

const gameFieldRef = document.querySelector('.game-field');
const menuRef = document.querySelector('.menu');
const menuStatusRef = menuRef.querySelector('.menu__status');
const menuTimerRef = menuRef.querySelector('.menu__timer');
const menuButtonRef = menuRef.querySelector('.menu__prompt-button');
const menuMinesRef = menuRef.querySelector('#menu__mines-select');
const menuFlagsRef = menuRef.querySelector('.menu__flags');

let newTimer;
let timerValue = 0;
let bombsDefused = [];
let bombs = [];
let minesDropped = false;
let bombsQuantity;
let point;
let numberofPoints = 220;
let arrayOfPoints = [];
let flagsUsed = 0;

export { arrayOfPoints };
export { numberofPoints };
export { bombsQuantity };

menuStatusRef.textContent = '';

export { gameFieldRef };

const createField = () => {
  point = document.createElement('div');

  gameFieldRef.appendChild(point);
  point.classList.add(`point`);
  return point;
};

const callFuncCreateField = (callback, quantity) => {
  for (let i = 0; i < quantity; i++) {
    callback(i).setAttribute('data-value', i);
  }
};

const multiplyObjects = (numberofPoints) => {
    for (let i = 0; i < numberofPoints; i++) {
        let pointData = new fieldData(i, 0, false, false, false, false);
        arrayOfPoints.push(pointData);
    }
}

const multiplyBombs = (addBombsFunc, bombs) => {
    for (let i = 0; i < bombs; i++) {
        addBombsFunc(i);
    }
}

const showValue = event => {
        gameFieldRef.children[event.target.dataset.value].textContent = arrayOfPoints[event.target.dataset.value].value; 
    if (arrayOfPoints[event.target.dataset.value].value === 1) {
        gameFieldRef.children[event.target.dataset.value].classList.add('one');
    }
    if (arrayOfPoints[event.target.dataset.value].value === 2) {
        gameFieldRef.children[event.target.dataset.value].classList.add('two');
    }
     if (arrayOfPoints[event.target.dataset.value].value === 3) {
        gameFieldRef.children[event.target.dataset.value].classList.add('three');
    }
     if (arrayOfPoints[event.target.dataset.value].value === 4) {
        gameFieldRef.children[event.target.dataset.value].classList.add('four');
    }
      if (arrayOfPoints[event.target.dataset.value].value === 5) {
        gameFieldRef.children[event.target.dataset.value].classList.add('five');
    }
     if (arrayOfPoints[event.target.dataset.value].value === 6) {
        gameFieldRef.children[event.target.dataset.value].classList.add('six');
    }
     if (arrayOfPoints[event.target.dataset.value].value === 7) {
        gameFieldRef.children[event.target.dataset.value].classList.add('seven');
    }
     if (arrayOfPoints[event.target.dataset.value].value === 8) {
        gameFieldRef.children[event.target.dataset.value].classList.add('eight');
    }
};

const putMines = () => {
    bombs = arrayOfPoints.filter((el) => el.isMine === true );
    bombs.map((el) => {
putValueOfBomb(el);
    })
    
};

const putFlag = (event) => {
    if (arrayOfPoints[event.target.dataset.value].isFlag || arrayOfPoints[event.target.dataset.value].isOpened ) {
        return;
    }
    if (flagsUsed >= bombs.length) {
        return;
    }

    gameFieldRef.children[event.target.dataset.value].textContent = "F";
    arrayOfPoints[event.target.dataset.value].isFlag = true;
    flagsUsed++;
    menuFlagsRef.textContent = flagsUsed;

    if (arrayOfPoints[event.target.dataset.value].isFlag && arrayOfPoints[event.target.dataset.value].isMine) {
        if (arrayOfPoints[event.target.dataset.value].isDefused) {
            return;
}
        
        bombsDefused.push(arrayOfPoints[event.target.dataset.value]);
        arrayOfPoints[event.target.dataset.value].isDefused = true;
            return;
    }

    
    
    
}

const defeat = () => {
    clearInterval(newTimer);
    bombs.map(el => {
        gameFieldRef.children[el.position].classList.add('isBomb');
        
    })
    menuStatusRef.textContent = "You lose !"
    gameFieldRef.removeEventListener('click', Click);
}

multiplyObjects(numberofPoints);
callFuncCreateField(createField, numberofPoints);

// const checkConditionOfVictory = () => {
//     bombs.map(el => {
//         if (el.isFlag) {
//             return bombsDefused++
           
//         }
//     })
// };

const deleteDefusedMine = (event) => {
    if (arrayOfPoints[event.target.dataset.value].isDefused) {
        
        arrayOfPoints[event.target.dataset.value].isDefused = false;
        bombsDefused.pop();
    }
};
 
const victory = () => {
    if (bombsDefused.length === bombs.length) {
        clearInterval(newTimer);
        menuStatusRef.textContent = "You win !"
        gameFieldRef.removeEventListener('click', Click);
    }
        
}

const timer = () => {
    newTimer = setInterval(() => {
        timerValue++;
        menuTimerRef.textContent = timerValue;
        victory();
    }, 1000); 
}

const Click = event => {
    deleteDefusedMine(event);

    if (event.ctrlKey) {
        return putFlag(event);
    }
    if (arrayOfPoints[event.target.dataset.value].isFlag) {
        arrayOfPoints[event.target.dataset.value].isFlag = false;
        flagsUsed--;
        menuFlagsRef.textContent = flagsUsed;
        return gameFieldRef.children[event.target.dataset.value].textContent = "";
    }
    

    if (!minesDropped) {
        bombsQuantity = menuMinesRef.value;
        menuMinesRef.setAttribute('disabled', 'disabled');
        multiplyBombs(createBomb, bombsQuantity);
        putMines();
        minesDropped = true;
        timer();
    }

    if (arrayOfPoints[event.target.dataset.value].isOpened) {
        return;
    }
             
    if (!arrayOfPoints[event.target.dataset.value].isMine) {
        gameFieldRef.children[event.target.dataset.value].classList.add('isOpened');
        arrayOfPoints[event.target.dataset.value].isOpened = true;

        return showValue(event);
    }
    defeat(); 
} 

const showPrompt = () => {
    alert('Чтобы поставить флаг, нажмите Ctrl + ЛКМ');
}

gameFieldRef.addEventListener('click', Click);
menuButtonRef.addEventListener('click', showPrompt);

// gameFieldRef.addEventListener('click', ((event) => deleteDefusedMine(event)));
// gameFieldRef.addEventListener('click', () => {
//     if (flagsUsed > bombs.length) {
//         return;
//     }
//     checkConditionOfVictory(bombs)
// });


