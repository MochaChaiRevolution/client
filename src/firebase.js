import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyCxO5jLrphrjv1f2UMAO3QAfDkBfWNI6Nc',
  authDomain: 'mcrevolution-222703.firebaseapp.com',
  databaseURL: 'https://mcrevolution-222703.firebaseio.com',
  projectId: 'mcrevolution-222703',
  storageBucket: 'mcrevolution-222703.appspot.com',
  messagingSenderId: '140937254723'
})

export const db = app.database()
export const roomOne = db.ref('roomOne')
export const roomTwo = db.ref('roomTwo')
export const roomThree = db.ref('roomThree')
export const roomTest = db.ref('roomTest')
