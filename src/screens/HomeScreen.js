import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getUserRole } from '../firebase/db';

function HomeScreen({ navigation }) {
    useEffect(() => {
        // Example: Check user role after login
        const checkRole = async () => {
            const role = await getUserRole('USER_UID'); // Replace 'USER_UID' with actual user UID
            if (role === 'admin') {
                navigation.navigate('AdminScreen');
            }
            // Add more role checks as needed
        };
        
        checkRole();
    }, []);

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;
