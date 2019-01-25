
const Twit = require('twit');
const config = require('./twitter_config');
const T = new Twit(config);
const params = {
    q: 'banana',
    count: 2
};
// https://github.com/ttezel/twit

//https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets

//setting up a user stream
const stream = T.stream('user');

//anytime tweet happens
//stream.on('tweet',tweetEvent);

const tweetEvent = (eventMsg)=>{
    const fs = require('fs');
};

const tweet= {
  status: "nanananananan"
};

const tweeted = (err,data,response)=>{
    if(err){
        console.log("something went wrong");
    }else {
        console.log("works!");
    }
};

//T.post('statuses/update',tweet,tweeted);

/*
//get request
T.get('search/tweets', params, gotData);
//
const gotData = (err, data, response)=>{
    console.log(data)
};

*/
const retweet = ()=> {
    T.get('search/tweets', params, (err, data) => {
        //if there are no errors
        if (!err) {
            //grab Id of tweet to retweet
            const retweetId = data.statuses[0].id_str;
            // tell twitter to retweet
            T.post('statuses/retweet/:id', {
                id: retweetId
            }, (err, response) => {
                if (response) console.log("Retweeted!");
                //if there was an error while tweeting
                if (err) console.log("something went wrong");
            })
            //If unable to search a tweet
        } else {
            console.log("something went wron while searhivng");
        }

    });
};
//toteutetaan funktio, sen jälkeen aina 50 minuutin välein aina uudestaan (millisekuntteina)
retweet();
//setInterval(retweet,3000000);

//id: '1044377776411750406',
// screen_name: 'DankRygand',
const paramsNew={
    q: "rainbow",
    count: 5
};

//  get the list of user id's that follow
const findIds = ()=> {
    T.get('followers/ids', {screen_name: 'JapaniHenri'}, function (err, data, response) {
        console.log(data)
    });
};

const getUser = ()=>{
    T.get('search/tweets',paramsNew, (err,data, response) =>{
        for(let twit of data.statuses){
            console.log(twit.text);
        }
    })
};

//getUser();
