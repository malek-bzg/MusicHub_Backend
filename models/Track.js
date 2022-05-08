const mongoose = require('mongoose');
const MusicProject = require('./MusicProject');

const TrackSctchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
 

    instrument:{
        type:String,
        required:true
    },
 
    key:{
        type:String,
        required:true
    },
    measure:{
        type:String,
        required:true
    },
    tempo:{
        type:String,
        required:true
    },

    MusicTr: [{
        type:String,
        // required:true
    }],

    user:{
        type:String,
        required:true
    },
    musicProject:{
        type:String,
        required:true
    }
},
{
  timestamps: { currentTime: () => Date.now() },
}

);

module.exports = mongoose.model('Track',TrackSctchema)