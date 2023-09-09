import React, { useState } from 'react';
import User from './Users';
import Report from './Report';

function App() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [name, setName] = useState('');
    const [role, setRole] = useState('User');
    const [location, setLocation] = useState('');
    const [reason, setReason] = useState('');

    const handleAddUser = () => {
        if (name.trim() !== '') {
            const newUser = new User(Date.now(), name.trim(), role);
            setUsers([...users, newUser]);
            setName('');
        }
    };

    const handleLogin = (id) => {
        const user = users.find(u => u.id === id);
        setCurrentUser(user);
    };

    const handleMarkAttendance = (isPresent) => {
        currentUser.markAttendance(isPresent, location, isPresent ? '' : reason);
        setUsers(prevUsers => prevUsers.map(u => u.id === currentUser.id ? currentUser : u));
        setLocation(''); // Reset location
        setReason('');  // Reset reason
    };

    return (
        <div className="App" style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
            {currentUser ? (
                currentUser.role === 'Admin' ? (
                    <div>
                        <h2>Admin Dashboard</h2>
                        <h3>Attendance Reports:</h3>
                        <div>
                            {Report.generateReport(users).map(report => (
                                <div key={report.name}>
                                    <h4>{report.name}</h4>
                                    <ul>
                                        {report.attendance.map((entry, index) => (
                                            <li key={index}>
                                                {entry.date.toLocaleDateString()} - {entry.isPresent ? 'Present at ' + entry.location : 'Absent due to ' + entry.reasonForAbsence}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2>{currentUser.name}'s Dashboard</h2>
                        <h3>Mark Attendance:</h3>
                        <input 
                            type="text" 
                            value={location} 
                            onChange={e => setLocation(e.target.value)} 
                            placeholder="Enter your location"
                            style={{ padding: '5px', margin: '10px 0', width: '100%' }}
                        />
                        <br />
                        <textarea 
                            value={reason} 
                            onChange={e => setReason(e.target.value)}
                            placeholder="Reason for absence (only if absent)"
                            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
                        ></textarea>
                        <button 
                            onClick={() => handleMarkAttendance(true)}
                            style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', marginRight: '10px' }}
                        >
                            Mark Present
                        </button>
                        <button 
                            onClick={() => handleMarkAttendance(false)}
                            style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px' }}
                        >
                            Mark Absent
                        </button>
                    </div>
                )
            ) : (
                <div>
                    <h2>Login/Register</h2>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder="Enter name"
                        style={{ padding: '5px', margin: '10px 0', width: '100%' }}
                    />
                    <select 
                        value={role} 
                        onChange={e => setRole(e.target.value)}
                        style={{ padding: '5px', marginBottom: '10px', width: '100%' }}
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button 
                        onClick={handleAddUser}
                        style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', marginRight: '10px' }}
                    >
                        Register
                    </button>
                    <h3>Existing Users:</h3>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.name} ({user.role}) 
                                <button 
                                    onClick={() => handleLogin(user.id)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Login
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
