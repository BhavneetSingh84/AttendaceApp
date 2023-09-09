class Attendee {
    constructor(name) {
        this.name = name;
        this.isPresent = false;
    }

    togglePresence() {
        this.isPresent = !this.isPresent;
    }
}

export default Attendee;
