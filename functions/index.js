const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');

//tehään test adminin conffit
const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

//funktio getfacts jolla saadaan valueet
getFacts=()=>{
  const ref = firebaseApp.database().ref('facts');
  return ref.once('value').then(snap => snap.val());
};
const app = express();
//create the engine
app.engine('hbs',engines.handlebars);
// set the address
app.set('views', "./views");
// use the engine
app.set('view engine', 'hbs');
/*
app.get('/timestamp',(request,response)=>{
    response.send(`${Date.now()}`);
});*/

app.get('/',(request,response)=>{
    response.set('Cache-Control','public, max-age-300, s-maxage-600');
   // response.send(`${Date.now()}`);
    getFacts().then(facts =>{
        response.render('index',{facts});
        return true;
    }).catch(err =>{
        console.log(err);
    })
});
app.get('/api',(request,response)=>{
    response.set('Cache-Control','public, max-age-300, s-maxage-600');
    // response.send(`${Date.now()}`);
    getFacts().then(facts =>{
        response.json('index',{facts});
        return true;
    }).catch(err =>{
        console.log(err);
    })
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);