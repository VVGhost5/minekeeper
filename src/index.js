import './styles.css';
import createBomb from './js/putBombs';
import fieldData from './js/pointsDataObject';
import putMines from './js/putMines';
import putFlag from './js/putFlag';
import showValue from './js/showValue';
import createField from './js/createField';
import deleteDefusedMine from './js/deleteDefused';
import showPrompt from './js/showPrompt';
import timer from './js/timer';
import defeat from './js/defeat';

const refs = {
 gameFieldRef: document.getElementById('game-field'),
 menuStatusRef: document.getElementById('menu__status'),
 menuTimerRef: document.getElementById('menu__timer'),
 menuButtonRef: document.getElementById('menu__prompt-button'),
 menuMinesRef: document.getElementById('menu__mines-select'),
 menuFlagsRef: document.getElementById('menu__flags'),
}

const objects = {
newTimer: null,
 timerValue: 0,
 bombsDefused: [],
 bombs: [],
 minesDropped: false,
 bombsQuantity: 0,
 point: 0,
 numberofPoints: 220,
 arrayOfPoints: [],
 flagsUsed: 0,
}

refs.menuStatusRef.textContent = '';

const callFuncCreateField = (callback, quantity) => {
  for (let i = 0; i < quantity; i++) {
    callback(i).setAttribute('data-value', i);
  }
};

const multiplyObjects = (numberofPoints) => {
    for (let i = 0; i < numberofPoints; i++) {
        let pointData = new fieldData(i, 0, false, false, false, false);
        objects.arrayOfPoints.push(pointData);
    }
}

const multiplyBombs = (addBombsFunc, bombs) => {
    for (let i = 0; i < bombs; i++) {
        addBombsFunc(i);
    }
}

multiplyObjects(objects.numberofPoints);
callFuncCreateField(createField, objects.numberofPoints);

const Click = event => {
    deleteDefusedMine(event);

    if (event.ctrlKey) {
        return putFlag(event);
    }
    if (objects.arrayOfPoints[event.target.dataset.value].isFlag) {
        objects.arrayOfPoints[event.target.dataset.value].isFlag = false;
        objects.flagsUsed--;
        refs.menuFlagsRef.textContent = objects.flagsUsed;
        return refs.gameFieldRef.children[event.target.dataset.value].textContent = "";
    }
    
    if (!objects.minesDropped) {
        objects.bombsQuantity = refs.menuMinesRef.value;
        refs.menuMinesRef.setAttribute('disabled', 'disabled');
        multiplyBombs(createBomb, objects.bombsQuantity);
        putMines();
        objects.minesDropped = true;
        timer();
    }

    if (objects.arrayOfPoints[event.target.dataset.value].isOpened) {
        return;
    }
             
    if (!objects.arrayOfPoints[event.target.dataset.value].isMine) {
        refs.gameFieldRef.children[event.target.dataset.value].classList.add('isOpened');
        objects.arrayOfPoints[event.target.dataset.value].isOpened = true;
        return showValue(event);
    }
    defeat(); 
} 

refs.gameFieldRef.addEventListener('click', Click);
refs.menuButtonRef.addEventListener('click', showPrompt);

export { refs, objects, Click};