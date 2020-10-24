import { objects } from '../index';
import putValueOfBomb from './putValue';

const putMines = () => {
    objects.bombs = objects.arrayOfPoints.filter((el) => el.isMine === true );
    objects.bombs.map((el) => {
putValueOfBomb(el);
    })
    
};

export default putMines;