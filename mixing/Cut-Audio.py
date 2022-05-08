from pydub import AudioSegment
import sys
import io ## for Python 3
import os
import requests
posfin=sys.argv[3]
pos=sys.argv[2]
request = requests.get(sys.argv[1])
audio_file = io.BytesIO(request.content)
        
# Convert the audio to a compatible format in memory
converted_audio = io.BytesIO()
sound1 = AudioSegment.from_mp3(audio_file)

#sound1 = AudioSegment.from_mp3("C:/Users/dbira/Desktop/PIM/songs-mixer-main/code/1646570026308James_Brown_-_I_Feel_Good_(2).mp3")
# sound2 = AudioSegment.from_mp3(sys.argv[2])
# sound3 = AudioSegment.from_mp3(sys.argv[2])
# mix sound2 with sound1, starting at 5000ms into sound1)
#dali = sound1.overlay(sound3, position=2000)
from pydub.utils import mediainfo
mediainfo('lasttest.mp3')

first_cut_point = (1*60 + 18) * 1000
last_cut_point = (1*60 + 33) * 1000

sound1 = sound1[int(pos):int(posfin)]
#quieter_via_method = sound1.apply_gain(-10.7) tna9es fl soutt  

sound1.export("upload/lasttest.mp3", format="mp3")


sys.stdout.write("upload/lasttest.mp3")







