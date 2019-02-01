import css from './styles.css'
import ClocksModule from './clocksModule'

(new ClocksModule({
    target: document.getElementsByTagName('main')[0]
})).run();
