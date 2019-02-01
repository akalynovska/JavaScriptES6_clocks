import Clock from './clock';
import * as service from './clockService';

class ClocksModule {
    constructor(config) {
        this.target = config.target;
    }

    run() {
        service.findAll()
            .then(clocksObject => {
                console.log(clocksObject);
                let clocks = this.createClocks(clocksObject);
                this.render(clocks);
            })
            .catch(error => console.log(error));
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
        console.log(clocks);
        clocks.forEach((clock) => {
            clocksHtml += clock.render();
        });

        let clocksModuleTemplate =`
            <div class="clock-container">
                ${clocksHtml}
            </div>
        `;

        this.target.innerHTML = clocksModuleTemplate;
        //clocksHtml = clocksData;

        //console.log(this.importedData.data);
// clocks.forEach((value, index, clocks) => {
//                  //     console.log(data);
//                  //     data += value.render();
//                  // })

        // clocks.forEach(clock => {
        //
        //      html += clocksModuleTemplate;
        //          //`<div>
        //     //     <img src='${employee.picture}'/>
        //     //     <div>
        //     //         ${employee.firstName} ${employee.lastName}
        //     //         <p>${employee.phone}</p>
        //     //     </div>
        //     // </div>`;
        // });
        // this.target.innerHTML = html;
    }

}

export default ClocksModule
