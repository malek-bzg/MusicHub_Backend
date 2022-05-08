const User = require("../models/User");
const MusicProject = require("../models/MusicProject");
const Track = require("../models/Track");
//const lasttest1 = require("../lasttest1.mp3");


var stdout = require('stdout')


exports.getAll = async (req, res) => {
   
    res.send({ track: await Track.find() });
  };




exports.add = async (req, res) => {
  console.log('111')
    const { Nom,musicProject,tempo,measure,key,instrument , user} = req.body;
  
    const newTrack= new Track();
    
    newTrack.Nom = Nom
    newTrack.instrument = instrument 
    newTrack.key=key
    newTrack.measure=measure
    newTrack.tempo=tempo
    newTrack.musicProject=musicProject
    newTrack.user = user
     
    const musicproject = await MusicProject.findOne({ _id: musicProject });
    if (musicproject.userpv.includes(user )){
      newTrack.save()
      res.status(201).send({ message: "success", track: newTrack });
    }else{
      res.status(403).send({ message: "you need an inv" });
    }
    
    console.log(musicProject)
    console.log(user)
    
  };

  exports.delete = async (req, res) => {
    const track = await Track.findById(req.body._id).remove();
    res.status(201).send({ message: "success", track: track });
  };


  exports.edit = async (req, res) => {
    const {  _id,Nom,tempo,measure,key,instrument}  = req.body;
  
    let track = await Track.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          Nom:Nom,
          tempo:tempo,
          measure:measure,
          key:key,
          instrument:instrument,
        },
      }
    );
    res.status(201).send({ message: "success", track: track });
  };
  
  
  
exports.getMy = async (req, res) => {
  console.log(req.params.id)
 Track.find({ user: req.params.id }).exec((err,  track)=>{
  console.log(req.params.id)
    res.send(track);
  })
};
exports.branch_of = async (req, res) => {
  console.log(req.params.id)
 Track.find({ musicProject: req.params.id }).exec((err,  track)=>{
  console.log(req.params.id)
    res.send(track);
  })
};

exports.my_branch_in = async (req, res, next) => {
  const filters = req.query;
  const mp = await Track.find();
  const filteredmusicproject = mp.filter(musicproject => {
    let isValid = true;
    for (key in filters) {
      console.log(key, musicproject[key], filters[key]);
      isValid = isValid && musicproject[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredmusicproject);
};






exports.addMusicTr = async (req, res, next) => {
  console.log(req.body._id)

  const track = await Track.findOne({ _id: req.body._id });
  try{ track.MusicTr.unshift(`${req.protocol}://${req.get('host')}/upload/${req.file.filename}`)
       track.save();
  }catch{
    console.log(err)
  }
  //console.log(track)
  res.send({ track });
};

//----------------------------------------------------------------

//              test mixing


exports.mix = async (req, res, next) => {
  //var datatosend ;

  //const python = spawn('python3',['mix.py']     );
  console.log(req.body._id)
  const track = await Track.findOne({ _id: req.body._id });
  console.log(req.body._id)
  const track2 = await Track.findOne({ _id: req.body._id2 });
  var spawn = require("child_process").spawn;

	var process  = await spawn('python',["./mixing/mix.py",track.MusicTr[0],track2.MusicTr[0],req.body.nb]);
  console.log(req.body.nb)
  
//res.send("http://localhost:3000/upload/lasttest1.mp3")
  console.log("-------------------------------------")
  console.log("--------------3----------------")
  let musicproject = await MusicProject.findOneAndUpdate(
    { _id: track.musicProject },
    
  );
 

  musicproject.mixx ="http://localhost:3000/upload/lasttest1.mp3"
  res.send({ musicproject });
};



/*
exports.Cut_Audio= async (req, res, next) => {
  //var datatosend ;

  //const python = spawn('python3',['mix.py']     );
  console.log(req.body._id)
  const track = await Track.findOne({ _id: req.body._id });
  var spawn = require("child_process").spawn;
console.log(track.MusicTr[0])
var process  = await spawn('python',["./mixing/Cut-Audio.py",track.MusicTr[0],req.body.debut,req.body.fin]);
  console.log(req.body.nb)
  //track.MusicTr.unshift(`${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`)
  
 

  process.stdout.on('data',function(data){
  console.log("111")

		console.log(`stdout:${data}`);
	});
  console.log("122")
  process.stderr.on('data',function(data){
    console.log("1222")
    console.log(`stderr:${data}`);
	});


};

*/


exports.Cut_Audio= async (req, res, next) => {

  console.log(req.body._id)
  const track = await Track.findOne({ _id: req.body._id });
 const { spawn = () => null } = require('child_process');

 const command  = await spawn('python',["./mixing/Cut-Audio.py",track.MusicTr[0],req.body.debut,req.body.fin]);

 let result = '';
 console.log("----------------1111111111111111111--------------");
 command.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

command.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
command.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
}); 
  command.stdout.on('data', function (data) {
    result += data.toString();
    console.log("------------------------------");
    console.log(data);
  });
 command.on('close', function (code) {
  console.log("RESULT: ",typeof result);
  });
 // req.file.filename=result
  //res.send(`${result}://${req.get('host')}/upload/${req.file.filename}`)
}







//------------------------ find ghayth ----------------------
   



exports.findid = async (req, res) => {
  
  // const track = await Track.findById(req.params._id);
  //   res.status(201).send({ message: "success", track: track });
    Track.find({ _id: req.params.id }).exec((err,  track)=>{
      console.log(req.params.id)
        res.send(track);
    })
};


//------------------------ python   ------------------------------

exports.addmix = async (req, res, next) => {
 // console.log(req)
    console.log("---------------++++++++++++-----------------------------")
  const track = await Track.findById(req.body._id);
  console.log(track.musicProject )
 // const musicproject = await MusicProject.findById(track.musicProject );
 
//  console.log(musicproject )
  console.log("--------------3----------------")
  let musicproject = await MusicProject.findOneAndUpdate(
    { _id: track.musicProject },
    
  );
  console.log(req.body.files)
  console.log(musicproject)
  console.log("--------------------------------")
  console.log(req.body.files.photos)
  //musicproject.mixx =`${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
  res.send({ musicproject });
};
