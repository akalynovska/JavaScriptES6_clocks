class Clock {

    constructor(location, dateTimeString) {
        this.location = location;
        this.dateTimeString = dateTimeString;
        this.hours = this.dateTimeString.slice(11, 13);
        this.minutees = this.dateTimeString.slice(14, 16);
        this.seconds = this.dateTimeString.slice(17, 19);
    }

    render() {
        const HOURS_HAND_VALUE = this.hours * 360 / 12;
        const MINUTES_HAND_VALUE = this.minutees * 360 / 60;
        const CLOCK_TEMPLATE = `
            <clock>
                <h2>${this.location}</h2>
                <analog-clock>
                    <clock-face>
                        <div class="arrow-minutes" style="transform: rotate(${MINUTES_HAND_VALUE}deg);"></div>
                        <div class="arrow-hours" style="transform: rotate(${HOURS_HAND_VALUE}deg);"></div>
                    </clock-face>
                </analog-clock>
                <digital-clock>${this.hours}:${this.minutees}:${this.seconds}</digital-clock>
            </clock>
        `;
        return CLOCK_TEMPLATE;
    }

}

export default Clock
