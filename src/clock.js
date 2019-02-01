class Clock {

    constructor(location, time) {
        this.location = location;
        this.time = time;
        //console.log(location + '   ' + time);
    }

    render() {
        const template = `
            <div>
                <h2>${this.location}</h2>
                <p>${this.time}</p>
            </div>
        `;
        return template;
    }

}

export default Clock
