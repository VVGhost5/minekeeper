import { refs, objects} from '../index';
import victory from './victory';

const timer = () => {
    objects.newTimer = setInterval(() => {
        objects.timerValue++;
        refs.menuTimerRef.textContent = objects.timerValue;
        victory();
    }, 1000); 
}

export default timer;