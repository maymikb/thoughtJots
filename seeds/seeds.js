// const mongoose =require('mongoose');
// const thoughtRoutes = require('./thoughtRoutes');
// const userRoutes = require('./userRoutes');  
// mongoose.connect('mongodb://localhost: ') // ...?
const db = require("../config/connection");
const { User, Thought } = require("../models/")

//above??

//seed data for users
const userData = //name change ?? 
    [
        { username: 'birdCaller', email: 'caCaw@sample.com' },
        { username: 'singleAunt', email: 'lovelyLady@sample.com' },
        { username: 'exchangeStudent', email: 'exchangeStudent@sample.com' },
        { username: 'trekTech', email: 'tTsquared@sample.com' },
        //room for more
    ];

//seed data for thoughts
const ThoughtsData = //name change ?? 
    [
        { thoughtText: 'When did Harry meet Sally?', username: 'birdCaller' },
        { thoughtText: 'Why is six afraid of seven?', username: 'singleAunt' },
        { thoughtText: 'Live, love, laugh!', username: 'exchangeStudent' },
        { thoughtText: 'I need to pain the garage today!', username: 'trekTech' },
        //room for more
    ];

//seed data for reactions
const ReactionData = //name change ?? 
    [
        { reactionBody: 'They do not even rememeber!', username: 'trekTech' },
        { reactionBody: 'Because seven ate nine!', username: 'exchangeStudent' },
        { reactionBody: 'I try to everyday.', username: 'singleAunt' },
        { reactionBody: 'Have you picked a color yet?', username: 'birdCaller' },
        //room for more
    ];

async function seedDb() {
    await User.deleteMany()
    await Thought.deleteMany()

    await User.create(userData);
    console.log("Users has been added")

    await Thought.create(ThoughtsData);
    console.log("Thoughts has been added")

}

db.once('open', () => {
    seedDb();
});


// seedDB();
//console.log(Seeds added!);
// }catch (error){
//     console.log('Error!:', error);
//     .then mongoose.connection.close();

// }
