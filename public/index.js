//tarvitaan firebaseen ku se ei toimi muuten:D
document.addEventListener('DOMContentLoaded', event => {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // test.auth().onAuthStateChanged(user => { });
    // test.database().ref('/path/to/ref').on('value', snapshot => { });
    // test.messaging().requestPermission().then(() => { });
    // test.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    const app = firebase.app();
    console.log(app);
});

googleLogin=()=>{
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
      .then(result => {
          const user = result.user;
          document.write(`Hello ${user.displayName}`);
          console.log(user);
      }).catch(console.log)
};
