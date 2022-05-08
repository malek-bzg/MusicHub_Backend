const mongoose = require('mongoose');
const MusicProject = require('./Track');


const BandSchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
 
  
    photo: {
        type: String,
       // default: "http://localhost:3000/upload/default-profile.png",
        required: false
    },

    musicproject:[{
        type:String,
        required:false
       
    }],
 

    user:[{
        type:String,
        required:false
        //type: mongoose.Schema.Types.ObjectId,
       // ref: 'User'
    }]
    
},
{
  timestamps: { currentTime: () => Date.now() },
}

);
 
module.exports = mongoose.model('Band',BandSchema)