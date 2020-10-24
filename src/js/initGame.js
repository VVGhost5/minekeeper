import { objects, refs, multiplyBombs } from '../index';
import createBomb from './putBombs';
import timer from './timer';
import putMines from './putMines';



const initGame = () => {
 objects.bombsQuantity = refs.menuMinesRef.value;
        refs.menuMinesRef.setAttribute('disabled', 'disabled');
        multiplyBombs(createBomb, objects.bombsQuantity);
        putMines();
        objects.minesDropped = true;
        timer();
}
    
export default initGame;