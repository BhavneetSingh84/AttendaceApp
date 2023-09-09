class User {
    constructor(id, name, role = 'User') {
        this.id = id;
        this.name = name;
        this.role = role;
        this.attendance = [];
    }
    
    markAttendance(isPresent, location, reasonForAbsence = '') {
        this.attendance.push({ date: new Date(), isPresent, location, reasonForAbsence });
    }

    getReport() {
        return this.attendance;
    }
}

export default User;
