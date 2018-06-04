import firebase from 'firebase';
import 'firebase/firestore';
import { initFirestorter, Collection } from 'firestorter';
import { config } from '../../firebase/firebase';

class FirebaseStore {

    constructor() {
        // Initialize firebase app
        firebase.initializeApp(config);

        // Initialize `firestorter`
        initFirestorter({ firebase: firebase });
    }
}

export const firebaseStore = new FirebaseStore();