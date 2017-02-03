import Firebase from 'firebase'
import settings from '../../config/settings'


const firebase = Firebase.initializeApp(settings)
firebase.auth().signInAnonymously()
export default firebase
