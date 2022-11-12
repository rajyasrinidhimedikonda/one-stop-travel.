import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup 

} from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSANGING_SENDER_ID,
    appId: process.env.APP_ID
}

  initializeApp(firebaseConfig)

  const auth = getAuth()
  const provider = new GoogleAuthProvider();


  const signupForm  = document.querySelector('.sign-up')
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(signupForm);
    const email = document.getElementById('eml').children[1].value
    const password = document.getElementById('pswd').children[1].value
    console.log("email: " + email);
    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('User created: ', cred.user);
            signupForm.reset()
        })
        .catch((err)=>{
            console.log(err.message);
        })
  })


signupForm.addEventListener('google', (e)=>{
    e.preventDefault()

      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
})
