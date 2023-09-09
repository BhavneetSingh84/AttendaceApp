class Report {
    static generateReport(users) {
        // Generate a report of all users' attendance
        return users.map(user => ({
            name: user.name,
            attendance: user.getReport()
        }));
    }
}

export default Report;
