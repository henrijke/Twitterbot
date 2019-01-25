const Twit = require('twit');
const config = require('./twitter_config');
const T = new Twit(config);
//streami ei enäää toimi
const stream = T.stream('user');

/*
const followed = (eventMsg)=>{
    //käyttäjän nimi
    const name = eventMsg.source.name;
    //käyttäjän screeni nimi
    const screenName = eventMsg.source.screen_name;
    tweetIt(`@${name} Moi:-)`);
};
*/

const tweeted = (err, data, response) =>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
};

const tweetIt = (txt)=>{
    const tweet = {
        status: txt
    };
    T.post('statuses/update', tweet,tweeted);
};

/*
const params = {
   q: "lol",
   count: 5
};
*/

const tweetEvent = (eventMsg) =>{
    const replyto = eventMsg.in_reply_to_screen_name;
    const text = eventMsg.text;
    const from = eventMsg.user.screen_name;

    if(replyto === 'DevausKakka'){
        const newTweet = `@${from} MOI:-DDD`;
        tweetIt(newTweet);
    }
};


/*
const gotData = (err, data, response)=>{
    console.log(data);
    for (let tweet of data.statuses){
        console.log("KAKKA" + tweet.text);
    }
};
*/


//T.get('search/tweets', params, gotData);

//stream.on('follow',followed);
//stream.on('tweet', tweetEvent);

