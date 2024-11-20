import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDKyBJqXHMhVxZ0A4by3V54TSkRyIgSxq8',
  authDomain: 'portfoliosio.firebaseapp.com',
  projectId: 'portfoliosio',
  storageBucket: 'portfoliosio.firebasestorage.app',
  messagingSenderId: '445665251791',
  appId: '1:445665251791:web:539b97d8fae910768f42ba',
  measurementId: 'G-5R5Q7T3EBM',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
