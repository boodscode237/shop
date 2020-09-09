import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBuZ9YogKJg8jYr-0YuIPk3Yul_nAy7nv8",
    authDomain: "crown-db-de75d.firebaseapp.com",
    databaseURL: "https://crown-db-de75d.firebaseio.com",
    projectId: "crown-db-de75d",
    storageBucket: "crown-db-de75d.appspot.com",
    messagingSenderId: "905469952785",
    appId: "1:905469952785:web:6eda31246aa1e80c8cc2b0",
    measurementId: "G-WL0JDCDZL9"
}

export const creatUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()


    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef
}


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase