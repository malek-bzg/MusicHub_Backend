from pydub import AudioSegment
import sys
import io ## for Python 3
import os
import requests
p=sys.argv[3]
request = requests.get(sys.argv[1])
audio_file = io.BytesIO(request.content)
        
# Convert the audio to a compatible format in memory
converted_audio = io.BytesIO()
sound1 = AudioSegment.from_mp3(audio_file)
# Download the challenge audio and store in memory
request = requests.get(sys.argv[2])
audio_file = io.BytesIO(request.content)
        
# Convert the audio to a compatible format in memory
converted_audio = io.BytesIO()
sound = AudioSegment.from_mp3(audio_file)

#sound1 = AudioSegment.from_mp3("C:/Users/dbira/Desktop/PIM/songs-mixer-main/code/1646570026308James_Brown_-_I_Feel_Good_(2).mp3")
# sound2 = AudioSegment.from_mp3(sys.argv[2])
# sound3 = AudioSegment.from_mp3(sys.argv[2])
# mix sound2 with sound1, starting at 5000ms into sound1)
#dali = sound1.overlay(sound3, position=2000)
output = sound1.overlay(sound, position=int(p))
#output = dali.atempo(sound2, position=2000)

output.export("upload/lasttest1.mp3", format="mp3")
# save the result
#output.export("lasttest1.mp3", format="mp3")




# -----------------------------------------------------------
# url='Localhost:3000/api/track/addMusicTr/post'
# files={'files': open('lasttest1.mp3','rb')}
# values={'upload_file' : 'lasttest1.mp3' , 'DB':'photcat' , 'OUT':'csv' , 'SHORT':'short'}
# r=requests.post(url,files=files,data=values)
