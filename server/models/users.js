const mongoose = require('mongoose');

const user = mongoose.model('user', {
    email: {type: String},
    password: {type: String },
    isActive:{type: Number},
    words:[{
        name:String,
        priority:Number,

    }],
    quizScore:Number,
    computationScore:Number,
    quizFrequency:Number,
    lastLogin:Date

})

module.exports = user;