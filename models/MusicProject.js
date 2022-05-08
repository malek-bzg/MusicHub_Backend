const mongoose = require('mongoose')

const MusicProjeSctchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
 
    style:{
        type:String,
        required:true
    },
    
    photo: {
        type: String,
       // default: "http://localhost:3000/upload/default-profile.png",
        required: false
    },

    type:{
        type:String,// privet wala public 
        required:true
    },
 

    user:{
        type:String,
        required:true
        //type: mongoose.Schema.Types.ObjectId,
       // ref: 'User'
    },

    userpv:[{
        type:String,
       // required:false
        //type: mongoose.Schema.Types.ObjectId,
       // ref: 'User'
    }],
    mixx:{
        type:String,
        required:false
        
    }
    
},
{
  timestamps: { currentTime: () => Date.now() },
}

);

module.exports = mongoose.model('MusicProject',MusicProjeSctchema)