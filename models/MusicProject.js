const mongoose = require('mongoose')

const MusicProjeSctchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
 

    type:{
        type:String,// privet wala public 
        required:true
    },
 

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
},
{
  timestamps: { currentTime: () => Date.now() },
}

);

module.exports = mongoose.model('MusicProject',MusicProjeSctchema)