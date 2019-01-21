import firebase from 'firebase';

export const appName = 'adv-react-d7658';
export const firebaseConfig = {
    apiKey: "AIzaSyAD9aHAx_McBJhTizPDzVX6jZOnVNNue6Y",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "313306177174"
};

firebase.initializeApp(firebaseConfig);