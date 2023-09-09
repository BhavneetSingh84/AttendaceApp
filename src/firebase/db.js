import firebase from './config';

const db = firebase.firestore();

export const assignRole = (uid, role) => {
    return db.collection('users').doc(uid).set({ role });
}

export const getUserRole = async (uid) => {
    const userDoc = await db.collection('users').doc(uid).get();
    return userDoc.exists ? userDoc.data().role : null;
}
