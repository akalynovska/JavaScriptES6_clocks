import Clock from './clock';
import * as service from './clockService';

class ClocksModule {
    constructor(config) {
        this.target = config.target;
    }

    run() {
        service.findAll()
            .then(clocksObject => {
                //console.log(clocksObject);
                let clocks = this.createClocks(clocksObject);
                this.render(clocks);
            })
            .catch(error => console.log('rrr'+error.message));
    }

    createClocks(clocksObject) {
        let clocks = [];

        for (const [key, value] of Object.entries(clocksObject)) {
            clocks.push(new Clock(key, value));
        }
        return clocks;
    }

    render(clocks) {
        let clocksHtml = ``;

        clocks.forEach((clock) => {
            clocksHtml += clock.render();
        });

        let clocksModuleTemplate =`
            <div class="clock-container">
                ${clocksHtml}
            </div>
        `;

        this.target.innerHTML = clocksModuleTemplate;

    }

}

export default ClocksModule
